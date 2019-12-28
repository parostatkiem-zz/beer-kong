import React, { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";

function ErrorModal({ text, title = "Ups, coś poszło nie tak" }) {
  const [isOpen, setOpen] = useState(true);

  return (
    <>
      <Row>
        <Col md="4">
          <Modal
            className="modal-dialog-centered modal-danger"
            contentClassName="bg-gradient-danger"
            isOpen={isOpen}
            toggle={() => setOpen(false)}
          >
            <div className="modal-header">
              <h6
                className=" heading modal-title"
                id="modal-title-notification"
              >
                {title}
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => setOpen(false)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="py-2 text-center">
                <p>{text}</p>
              </div>
            </div>
            <div className="modal-footer">
              <Button
                className="btn-white ml-auto"
                onClick={() => setOpen(false)}
                color="default"
                type="button"
              >
                No cóż, trudno
              </Button>
            </div>
          </Modal>
        </Col>
      </Row>
    </>
  );
}

export default ErrorModal;
