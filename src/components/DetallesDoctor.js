import React, { Component } from 'react'
import axios from 'axios'
export default class DetallesDoctor extends Component {
  
    state={
        doctor:null,
        status:false
    }


    loadDoctores=()=>{
        var request = "api/doctores/"+this.props.iddoctor
        var url="https://apidoctoresroutes2023.azurewebsites.net/"+request
        console.log(url);
        axios.get(url).then(response=>{
            this.setState({
                doctor:response.data,
                status:true
            })
        })
    }
  
    componentDidMount=()=>{
        this.loadDoctores();
    }


    componentDidUpdate=(oldProps)=>{
        if(oldProps.iddoctor!=this.props.iddoctor){
            this.loadDoctores();
        }
    }
    render() {
    return (
      <div>
        <h1>Detalles Doctor</h1>
        {
            this.state.status==true &&
            (<div><h2>{this.state.doctor.apellido}</h2>
            <h2>{this.state.doctor.especialidad}</h2>
            <h2>{this.state.doctor.salario}</h2>
            <h2>{this.state.doctor.idHospital}</h2></div>)
        }
      </div>
    )
  }
}
