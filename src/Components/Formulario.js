import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

export default class Formulario extends Component {
  render() {
    console.log(this.props.handleChange);
    const form = this.props.form;
    return (
      <>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="nombres">
              <Form.Label>Nombre(s) *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre(s) completo(s)"
                name="nombres"
                required="required"
                onChange={this.props.handleChange}
                defaultValue={form ? form.nombres : ""}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="apellidos">
              <Form.Label>Apellido(s)</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos completo"
                name="apellidos"
                onChange={this.props.handleChange}
                defaultValue={form ? form.apellidos : ""}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="documento">
              <Form.Label>Documento *</Form.Label>
              <Form.Control
                type="text"
                minLength="7"
                maxLength="11"
                name="documento"
                placeholder="Documento de identidad"
                onChange={this.props.handleChange}
                defaultValue={form ? form.documento : ""}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="correo">
              <Form.Label>Correo *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite el correo"
                name="correo"
                required
                onChange={this.props.handleChange}
                defaultValue={form ? form.correo : ""}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="numero_expediente">
              <Form.Label>Expediente (*)</Form.Label>
              <Form.Control
                type="text"
                placeholder="EXP-3902993-P90"
                name="numero_expediente"
                onChange={this.props.handleChange}
                defaultValue={form ? form.numero_expediente : ""}
                required="required"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="tipo_documento">
              <Form.Label>Tipo de Documento (*)</Form.Label>
              <Form.Control
                as="select"
                name="tipo_documento"
                onChange={this.props.handleChange}
                defaultValue={form ? form.tipo_documento : ""}
                required
              >
                <option value="">seleccione...</option>
                <option value="CC">CC</option>
                <option value="TI">TI</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="genero">
              <Form.Label>Genero (*)</Form.Label>
              <Form.Control
                as="select"
                name="genero"
                defaultValue={form ? form.genero : ""}
                onChange={this.props.handleChange}
                required
              >
                <option value="" style={{ display: "none" }}>
                  Seleccionar...
                </option>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="institucion_id">
              <Form.Label>Institución Educativa (*)</Form.Label>
              <Form.Control
                as="select"
                name="institucion_id"
                onChange={this.props.handleChange}
                defaultValue={form ? form.institucion_id : ""}
                required
              >
                <option value="0">Choose...</option>
                <option value="1">IJFR</option>
                <option value="2">HAG</option>
                <option value="3">FO</option>
                <option value="3">JAYG</option>
                <option value="3">SO</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="telefono_celular">
              <Form.Label>Celular</Form.Label>
              <Form.Control
                type="text"
                minLength="5"
                maxLength="11"
                placeholder="Número celular"
                name="telefono_celular"
                defaultValue={form ? form.telefono_celular : ""}
                onChange={this.props.handleChange}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </>
    );
  }
}
