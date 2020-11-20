import React, { Component } from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Tabla extends Component {
  render() {
    if (Object.keys(this.props.estudiantes).length === 0) {
      return (
        <h3>
          No hay datos disponibles. Por favor verifique la conexión con la Api
        </h3>
      );
    }
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.props.estudiantes.map((estudiante, index) => {
              return (
                <tr key={index}>
                  <td>{estudiante.id}</td>
                  <td>
                    {estudiante.nombres} {estudiante.apellidos}
                  </td>
                  <td>{estudiante.correo}</td>
                  <td>
                    {/*Seleccionamos el estudiante y abrimos el modal. Ese modal 
                  debe tener la información del usuario que queremos actualizar */}

                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        this.props.seleccionarEstudiante(estudiante.id);
                        this.props.showModal();
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>

                    {/*Seleccionamos el estudiante igual que en el metodo PUT
                    Y  cambiamos el estado de modalEliminar que se encarga
                    de abrir y cerrar el modal para eliminar  */}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.seleccionarEstudiante(estudiante.id);
                        this.props.showEliminar();
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
