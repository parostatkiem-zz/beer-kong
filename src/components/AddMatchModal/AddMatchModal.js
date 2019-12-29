import React, { useState, useRef } from "react";
import {
  Button,
  Modal,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Label
} from "reactstrap";
import ReactDatetime from "react-datetime";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/react-hooks";
import ErrorModal from "components/ErrorModal/ErrorModal";
import { CREATE_MATCH } from "gql/mutations";
import { GET_LEAGUE } from "gql/queries";

const UserSelector = ({ allUsers, setUserFn, label, userToExclude }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <InputGroup className="input-group-alternative">
        <Input
          type="search"
          name="search"
          id="exampleSearch"
          placeholder="Wpisz nazwę, by zawęzić listę"
          onChange={e => setSearch(e.target.value)}
        />
      </InputGroup>
      <Input
        required
        type="select"
        id={label}
        onChange={e => (e = setUserFn(e.target.value))}
      >
        {allUsers
          .filter(
            u => u.id !== userToExclude && u.name.match(new RegExp(search, "i"))
          )
          .map(u => (
            <option value={u.id} key={u.id}>
              {u.name}
            </option>
          ))}
      </Input>
    </>
  );
};

const AddMatchModal = ({ leagueId, usersToChoseFrom }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [addMatch] = useMutation(CREATE_MATCH, {
    refetchQueries: [{ query: GET_LEAGUE }],
    onError: e => setErrorMessage(e.message),
    onCompleted: () => setOpen(false)
  });
  const [isOpen, setOpen] = useState(true);

  const [user1, setUser1] = useState(usersToChoseFrom[0].id);
  const [user2, setUser2] = useState(usersToChoseFrom[1].id);

  const formElement = useRef(null);
  const formValues = {
    expiration: useRef(null)
  };

  function handleFormSubmit(e) {
    if (formElement.current.reportValidity() && formValues.expiration.current) {
      const data = {
        expiration: formValues.expiration.current,
        user1: { id: user1 },
        user2: { id: user2 },
        league: { id: leagueId },
        isRanked: true
      };
      console.log(data);
      //  addMatch({ variables: { data } });
    } else {
      setErrorMessage("Wszystkie pola muszą być wypełnione");
      return false;
    }
    setOpen(false);
    return false;
  }
  return (
    <>
      {errorMessage && <ErrorModal text={errorMessage} />}
      <Button
        className="btn-icon"
        block
        color="primary"
        type="button"
        onClick={() => setOpen(true)}
      >
        <span className="btn-inner--icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span className="btn-inner--text">Zaplanuj mecz</span>
      </Button>
      <Modal
        className="modal-dialog-centered"
        size="sm"
        isOpen={isOpen}
        toggle={() => setOpen(false)}
      >
        <div className="modal-body p-0">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent pb-3 text-center">
              <div className="text-muted text-center">
                Formularz planowania meczu
              </div>

              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => setOpen(false)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </CardHeader>
            <CardBody className="px-lg-4 py-lg-4">
              <Form
                role="form"
                innerRef={formElement}
                onSubmit={handleFormSubmit}
              >
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-calendar-grid-58" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <ReactDatetime
                      inputProps={{
                        placeholder: "Wybierz planowaną datę meczu"
                      }}
                      timeFormat={false}
                      input={false}
                      onChange={e => {
                        formValues.expiration.current = e._d.toISOString();
                      }}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <UserSelector
                    label="Gracz nr 1"
                    setUserFn={setUser1}
                    allUsers={usersToChoseFrom}
                    userToExclude={user2}
                  />
                </FormGroup>
                <FormGroup>
                  <UserSelector
                    label="Gracz nr 2"
                    setUserFn={setUser2}
                    allUsers={usersToChoseFrom}
                    userToExclude={user1}
                  />
                </FormGroup>
                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    onClick={handleFormSubmit}
                    type="button"
                  >
                    Zaplanuj
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Modal>
    </>
  );
};

export default AddMatchModal;
