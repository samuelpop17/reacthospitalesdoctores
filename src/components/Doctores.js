import React, { Component } from 'react'
import axios from "axios"
export default class Doctores extends Component {

    state = {
        empleados: []
    }

    loadDoctores = () => {
        var idhospital=parseInt(this.props.id)
        console.log(idhospital)
        var url = "https://apidoctoresroutes2023.azurewebsites.net/api/Doctores/DoctoresHospital/"+idhospital
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


    render() {
        return (
            <div>
                <h1>Doctores ID: {this.props.id}</h1>
                <hr />

                <h1>Empleados</h1>


                <table className="table table-striped">
          <thead>
            <tr>
              <th>ID del Doctor</th>
              <th>Apellido</th>
              <th>Especialidad</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {this.state.empleados.map(doctor => (
              <tr key={doctor.idDoctor}>
                <td>{doctor.idDoctor}</td>
                <td>{doctor.apellido}</td>
                <td>{doctor.especialidad}</td>
                <td>{doctor.salario}</td>
              </tr>
            ))}
          </tbody>
        </table>



               
            </div>
        )
    }
}
