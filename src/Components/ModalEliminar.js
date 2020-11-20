import React from "react";
import { Modal } from "react-bootstrap";

export default class ModalEliminar extends React.Component {
  render() {
    return (
      <Modal show={this.props.modalEliminar} animation={false}>
        <Modal.Body>
          Estás seguro que deseas eliminar este estudiante
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-danger"
            onClick={() => this.props.peticionDelete()}
          >
            Sí
          </button>
          <button
            className="btn btn-secundary"
            onClick={this.props.hideEliminar}
          >
            No
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}
