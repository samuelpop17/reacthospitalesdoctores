import React, { Component } from 'react'
import axios from "axios"
import DetallesDoctor from './DetallesDoctor'
import { NavLink } from 'react-router-dom'
export default class Doctores extends Component {

  state = {
    empleados: [],
    idDoctor:-1
  }

  loadDoctores = () => {
    var idhospital = parseInt(this.props.id)
    console.log(idhospital)
    var url = "https://apidoctoresroutes2023.azurewebsites.net/api/Doctores/DoctoresHospital/" + idhospital
    axios.get(url).then((response) => {
      this.setState({
        empleados: response.data

      })



    })
  }
  componentDidMount = () => {
    this.loadDoctores();
  }
  componentDidUpdate = (oldProps) => {
    if (oldProps.id != this.props.id) {
      this.loadDoctores();
    }
  }

  mostrarDetalles = (id) => {
    this.setState({
      idDoctor:id
    })
  }

  render() {
    return (
      <div>
        <h1>Doctores ID: {this.props.id}</h1>
        <hr />

        <h1>Empleados</h1>

        {this.state.idDoctor!=-1 &&
        (<DetallesDoctor iddoctor={this.state.idDoctor}/>)}
        <table className="table table-striped">
          <thead>
            <tr>

              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Detalles</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.empleados.map(doctor => (
              <tr key={doctor.idDoctor}>

                <td>{doctor.apellido}</td>
                <td>{doctor.especialidad}</td>
                <td><button onClick={()=> this.mostrarDetalles(doctor.idDoctor)}>Detalles</button></td>
                <td><NavLink to={"/detallesdoctor/"+doctor.idDoctor}>Detalles</NavLink></td>
              </tr>
            ))}
          </tbody>
        </table>




      </div>
    )
  }
}
