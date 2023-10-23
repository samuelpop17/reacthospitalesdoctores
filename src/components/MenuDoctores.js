import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from "axios"

export default class MenuDoctores extends Component {
    
    state={
        hospitales:[]
    }

    loadHospitales=()=>{
        var url="https://apicrudhospital.azurewebsites.net/webresources/hospitales"
        axios.get(url).then((response)=>{
            this.setState({
                hospitales:response.data
            })
        })
    }

    
    componentDidMount=()=>{
        this.loadHospitales();
    }
    
    
    render() {
        return (

            <div>
                <h1>Menu Doctores</h1>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">Hospitales</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    
                                    <div className="dropdown-center">
                                        <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hospitales
                                        </button>
                                        <ul className="dropdown-menu">
                                            {this.state.hospitales.map((hospital,index)=>{
                                                return(<li key={index}><NavLink className="nav-link"  to={"/doctores/"+hospital.idhospital}>{hospital.nombre}</NavLink></li>)
                                            })}
                                            
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
