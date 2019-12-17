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
  InputGroupAddon,
  Input,
  InputGroupText
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddLeagueModal = () => {
  const [isOpen, setOpen] = useState(true);
  const formElement = useRef(null);
  const formValues = {
    name: useRef(null),
    description: useRef(null)
  };

  function handleFormSubmit(e) {
    if (formElement.current.reportValidity()) {
      const data = {
        name: formValues.name.current.value,
        description: formValues.description.current.value
      };
      console.log(data);
    }

    return false;
  }
  return (
    <>
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
        <span className="btn-inner--text">Załóż ligę</span>
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
                Formularz zakładania ligi
              </div>
            </CardHeader>
            <CardBody className="px-lg-4 py-lg-4">
              <Form
                role="form"
                innerRef={formElement}
                onSubmit={handleFormSubmit}
              >
                <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative ">
                    <Input
                      innerRef={formValues.name}
                      placeholder="Nazwa"
                      type="text"
                      required
                      pattern="[A-Za-z]+"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <Input
                      innerRef={formValues.description}
                      id="exampleFormControlTextarea1"
                      placeholder="Opis, zasady ..."
                      rows="3"
                      type="textarea"
                      className="form-control-alternative"
                      required
                    />
                  </InputGroup>
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

export default AddLeagueModal;
