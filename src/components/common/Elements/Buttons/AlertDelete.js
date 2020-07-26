import React from 'react'
import Modal from "react-bootstrap/Modal"
import Button from 'react-bootstrap/Button'

export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
            
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hide {props.type || "offering"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to hide this {props.type || "offering"}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={props.onHide}>Cancel</Button>
          <Button variant="danger" onClick={props.onDelete}>Hide</Button>
        </Modal.Footer>
      </Modal>
    );
  }