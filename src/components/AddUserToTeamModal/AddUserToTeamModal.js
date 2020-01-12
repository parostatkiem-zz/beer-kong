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
  Label
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/react-hooks";
import ErrorModal from "components/ErrorModal/ErrorModal";
import { ADD_USER_TO_TEAM } from "gql/mutations";
import { GET_TEAM } from "gql/queries";

const UserSelector = ({
  allUsers,
  setUserFn,
  label,
  userToExclude,
  leagueId
}) => {
  const [search, setSearch] = useState("");
  function canUserBeAdded(u) {
    return (
      u.id !== userToExclude &&
      u.name.match(new RegExp(search, "i")) &&
      !u.leagues.some(l => l.id === leagueId)
    );
  }
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
        {allUsers.filter(canUserBeAdded).map(u => (
          <option value={u.id} key={u.id}>
            {u.name}
          </option>
        ))}
      </Input>
    </>
  );
};

const AddUserToTeamModal = ({ teamId, leagueId, usersToChoseFrom }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [addUserToTeam] = useMutation(ADD_USER_TO_TEAM, {
    refetchQueries: [{ query: GET_TEAM, variables: { id: teamId } }],
    onError: e => setErrorMessage(e.message),
    onCompleted: () => setOpen(false)
  });
  const [isOpen, setOpen] = useState(false);

  const [user1, setUser1] = useState(
    (usersToChoseFrom.length && usersToChoseFrom[0].id) || null
  );

  const formElement = useRef(null);

  function handleFormSubmit(e) {
    if (formElement.current.reportValidity()) {
      const data = {
        where: { id: teamId },
        data: { id: user1 }
      };
      console.log(data);
      addUserToTeam({ variables: { ...data } });
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
        <span className="btn-inner--text">Dodaj gracza</span>
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
                Formularz dodawania gracza do drużyny
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
                  <UserSelector
                    setUserFn={setUser1}
                    allUsers={usersToChoseFrom}
                    leagueId={leagueId}
                  />
                </FormGroup>

                <div className="text-center">
                  <Button
                    className="my-4"
                    color="primary"
                    onClick={handleFormSubmit}
                    type="button"
                  >
                    Dodaj
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

export default AddUserToTeamModal;
