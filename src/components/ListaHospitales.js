import React, { Component } from 'react'
import axios from 'axios'
export default class ListaHospitales extends Component {
 
    state={
        hospitales:[],
        status:false
    }

    loadHospitales=()=>{
        var url="https://apicrudhospital.azurewebsites.net/webresources/hospitales"
        axios.get(url).then(response=>{
            this.setState({
                hospitales:response.data,
                status:true
            })
        })
    }
 
    componentDidMount=()=>{
        this.loadHospitales();
    }
    render() {
    return (
      <div>
        <h1>ListaHospitales</h1>

        <table className="table table-striped">
          <thead>
            <tr>

              <th>Hospital ID</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Camas</th>
            </tr>
          </thead>
          <tbody>
            {this.state.hospitales.map((hospital,index) => (
              <tr key={index}>

                <td>{hospital.idhospital}</td>
                <td>{hospital.nombre}</td>
                <td>{hospital.direccion}</td>
                <td>{hospital.telefono}</td>
                <td>{hospital.camas}</td>
                
                </tr>
            ))}
          </tbody>
        </table>

      </div>
    )
  }
}
