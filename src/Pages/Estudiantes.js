import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

import Tabla from "../Components/Tabla";
import ModalFormulario from "../Components/ModalFormulario";
import ModalEliminar from "../Components/ModalEliminar";

const url = "aquí_va_mi_URL/api/";

export default class Estudiante extends Component {
  constructor() {
    super();
    this.state = {
      estudiantes: [],
      show: false,
      modalEliminar: false,
      idEstudiante: "",

      form: {
        documento: "",
        tipo_documento: "",
        nombres: "",
        apellidos: "",
        correo: "",
        numero_expediente: "",
        genero: "",
        institucion_id: "",
        telefono_celular: "",
        tipoModal: ""
      }
    };
  }

  ///////////////////////////////////////////////////
  /* INICIO PETICIONES*/
  //////////////////////////////////////////////////

  peticionGet = () => {
    fetch(`${url}estudiantes`)
      .then((response) => response.json())
      .then((data) => this.setState({ estudiantes: data }))
      .catch((err) => {
        console.log(err);
      });
  };

  peticionPost = async () => {
    await axios
      .post(`${url}nuevo-estudiante`, this.state.form)
      .then((response) => {
        this.showModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionPut = () => {
    axios
      .put(`${url}estudiante/${this.state.idEstudiante}`, this.state.form)
      .then((response) => {
        this.showModal();
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  peticionDelete = () => {
    axios
      .delete(`${url}estudiante/${this.state.idEstudiante}`, this.state.form)
      .then((response) => {
        this.setState({ modalEliminar: false });
        this.peticionGet();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  ///////////////////////////////////////////////////
  /* Manejo de formulario*/
  //////////////////////////////////////////////////

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  };

  ///////////////////////////////////////////////////
  /* Seleccionar el estudiante por id*/
  //////////////////////////////////////////////////

  seleccionarEstudiante = (estudianteMod) => {
    console.log(estudianteMod);
    const estudiante = this.state.estudiantes.find(
      (result) => result.id === estudianteMod
    );

    console.log(estudiante);

    this.setState({
      idEstudiante: estudiante.id,
      tipoModal: "actualizar",
      form: {
        documento: estudiante.documento,
        tipo_documento: estudiante.tipo_documento,
        nombres: estudiante.nombres,
        apellidos: estudiante.apellidos,
        correo: estudiante.correo,
        numero_expediente: estudiante.numero_expediente,
        genero: estudiante.genero,
        institucion_id: estudiante.institucion_id,
        telefono_celular: estudiante.telefono_celular
      }
    });
  };

  ///////////////////////////////////////////////////
  /* Cargar los datos que vienen de la API*/
  //////////////////////////////////////////////////

  componentDidMount() {
    this.peticionGet();
  }

  ///////////////////////////////////////////////////
  /* Mostrat y ocultar modales*/
  //////////////////////////////////////////////////

  showModal = () => {
    this.setState({ show: !this.state.show });
  };

  showEliminar = () => {
    this.setState({ modalEliminar: !this.state.show });
  };

  hideEliminar = () => {
    this.setState({ modalEliminar: false });
  };

  render() {
    return (
      <>
        {/*//////////////////////////////////////////////////
        Mostrar formulario agregar nuevo estudiante
        //////////////////////////////////////////////////*/}
        <Button
          variant="success"
          onClick={() => {
            this.setState({ tipoModal: "insertar", form: "" });
            this.showModal();
          }}
        >
          Nuevo estudiante
        </Button>

        {/*//////////////////////////////////////////////////
        Tabla de los estudiantes. Tambien contiene las acciones
        de editar y eliminar un estudiante

        NO LE FUNCIONAN LOS METODOS DE ADENTRO 
        //////////////////////////////////////////////////*/}
        <Tabla
          estudiantes={this.state.estudiantes}
          modalEliminar={this.state.modalEliminar}
          seleccionarEstudiante={this.seleccionarEstudiante}
          showModal={this.showModal}
          showEliminar={this.showEliminar}
          peticionPut={this.peticionPut}
          peticionDelete={this.peticionDelete}
          hideEliminar={this.hideEliminar}
        />

        {/*//////////////////////////////////////////////////
        Tabla de los estudiantes. Tambien contiene las acciones
        de editar y eliminar un estudiante

        NO LE FUNCIONAN LOS METODOS DE ADENTRO 
        HandleChange ni las peticiones
        //////////////////////////////////////////////////*/}
        <ModalFormulario
          tipoModal={this.state.tipoModal}
          show={this.state.show}
          idEstudiante={this.state.idEstudiante}
          form={this.state.form}
          showModal={this.showModal}
          peticionGet={this.peticionGet}
          peticionPost={this.peticionPost}
          peticionPut={this.peticionPut}
          peticionDelete={this.peticionDelete}
          seleccionarEstudiante={this.seleccionarEstudiante}
          handleChange={this.handleChange}
        />

        {/*//////////////////////////////////////////////////
        Tabla de los estudiantes. Tambien contiene las acciones
        de editar y eliminar un estudiante

        NO LE FUNCIONAN LOS METODOS DE ADENTRO 
        HandleChange ni las peticiones
        //////////////////////////////////////////////////*/}
        <ModalEliminar
          modalEliminar={this.state.modalEliminar}
          showEliminar={this.showEliminar}
          peticionDelete={this.peticionDelete}
          hideEliminar={this.hideEliminar}
        />
      </>
    );
  }
}
