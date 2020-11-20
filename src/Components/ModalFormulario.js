import React from "react";
import { Modal, Button } from "react-bootstrap";
import Formulario from "./Formulario";

export default class ModalFormulario extends React.Component {
  render() {
    const form = this.props.form;
    return (
      <>
        <Modal show={this.props.show} animation={false}>
          <Modal.Header closeButton onClick={this.props.showModal}>
            <Modal.Title>Ingresar Estudiante</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Formulario form={form} handleChange={this.props.handleChange} />
          </Modal.Body>
          <Modal.Footer>
            {/*Seleccionamos si el tipo de modal es inserta o actualizar 
            para cambiar el boton que tiene el metodo  */}
            {this.props.tipoModal === "insertar" ? (
              //Hacer la peticion post
              <Button variant="success" onClick={this.props.peticionPost}>
                Insertar
              </Button>
            ) : (
              //hacer la petición put
              <Button variant="success" onClick={this.props.peticionPut}>
                Actualizar
              </Button>
            )}

            <Button variant="primary" onClick={this.props.showModal}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
