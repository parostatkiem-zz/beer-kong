import React, { useState, useRef } from "react";
import {
  Button,
  Modal,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMutation } from "@apollo/react-hooks";
import ErrorModal from "components/ErrorModal/ErrorModal";
import { GET_LEAGUE } from "gql/queries";
import { END_MATCH } from "gql/mutations";

const EditMatchModal = ({
  isOpen,
  setOpen,
  user1,
  user2,
  leagueId,
  matchId
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [endMatch] = useMutation(END_MATCH, {
    refetchQueries: [{ query: GET_LEAGUE, variables: { id: leagueId } }],
    onError: e => setErrorMessage(e.message),
    onCompleted: () => setOpen(false)
  });
  const formElement = useRef(null);
  const formValues = {
    user1points: useRef(null),
    user2points: useRef(null)
  };

  function handleFormSubmit(e) {
    if (formElement.current.reportValidity()) {
      const variables = {
        data: {
          user1points: formValues.user1points.current.value,
          user2points: formValues.user2points.current.value
        },
        where: {
          id: matchId
        }
      };

      endMatch({ variables });
    } else {
      // setErrorMessage("Wszystkie pola muszą być wypełnione");
      return false;
    }
    setOpen(false);
    return false;
  }
  return (
    <>
      {errorMessage && <ErrorModal text={errorMessage} />}

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
                Formularz zakończenia meczu
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
                  <Label for="user1">
                    Punkty gracza <strong>{user1.name}</strong>
                  </Label>
                  <Input
                    type="number"
                    min={0}
                    max={10}
                    required
                    id="user1"
                    placeholder="Wpisz ilość punktów"
                    innerRef={formValues.user1points}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="user2">
                    Punkty gracza <strong>{user2.name}</strong>
                  </Label>
                  <Input
                    innerRef={formValues.user2points}
                    type="number"
                    min={0}
                    max={10}
                    required
                    id="user2"
                    placeholder="Wpisz ilość punktów"
                  />
                </FormGroup>
                <div className="modal-footer">
                  <Button
                    className="btn-icon"
                    color="danger"
                    onClick={handleFormSubmit}
                    type="button"
                  >
                    <span className="btn-inner--icon">
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span className="btn-inner--text">Usuń</span>
                  </Button>
                  <Button
                    className=" ml-auto"
                    color="primary"
                    onClick={handleFormSubmit}
                    type="button"
                  >
                    Zapisz wynik
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

export default EditMatchModal;
