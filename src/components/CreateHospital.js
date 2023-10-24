import React, { Component } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {
   
    state={
        mensaje:"",
        status:false
    }



   cajaId=React.createRef();
   cajaNombre=React.createRef();
   cajaDireccion=React.createRef();
   cajaTelefono=React.createRef();
   cajaCamas=React.createRef();
   
   insertHospital =(e)=>{
        e.preventDefault();
        var url = "https://apicrudhospital.azurewebsites.net/webresources/hospitales/post" 
        var idhospital=parseInt(this.cajaId.current.value)
        var nombre=this.cajaNombre.current.value
        var direccion=this.cajaDireccion.current.value
        var telefono=this.cajaTelefono.current.value
        var camas=parseInt(this.cajaCamas.current.value)

        var hospital={
            idhospital:idhospital,
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            camas:camas
        }

        axios.post(url,hospital).then(response=>{
            this.setState({
                mensaje:"hospital insertado con nombre: "+nombre,
                status:true
            
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.status==true &&
                    (<Navigate to="/listahospitales"/>)
                }
                <h1>Create Hospital</h1>
                <h2>{this.state.mensaje}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="campo1">id Hospital</label>
                        <input
                            type="text"
                            className="form-control"
                            ref={this.cajaId}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="campo2">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            ref={this.cajaNombre}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="campo3">Direccion</label>
                        <input
                            type="text"
                            className="form-control"
                            ref={this.cajaDireccion}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="campo4">Telefono</label>
                        <input
                            type="text"
                            className="form-control"
                            ref={this.cajaTelefono}

                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="campo2">Camas</label>
                        <input
                            type="text"
                            className="form-control"
                            ref={this.cajaCamas}

                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.insertHospital}>Crear</button>
                </form>
            </div>
        )
    }
}
