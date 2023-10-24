import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuDoctores from './MenuDoctores';
import Doctores from './Doctores';
import DetallesDoctor from './DetallesDoctor';
import CreateHospital from './CreateHospital';
import ListaHospitales from './ListaHospitales';

export default class Router extends Component {
 
    render() {

        function HospitalId() {
            var { id } = useParams();
            return <Doctores id={id}/>
          }

        function DetallesDoctorElement () { 
          var { iddoctor } = useParams();
          return <DetallesDoctor iddoctor={iddoctor}/>

         }

    return (
      <BrowserRouter>
      <MenuDoctores/>
        <Routes>
        <Route path="/doctores/:id" element={<HospitalId/>}/>
        <Route path='/createhospital' element={<CreateHospital/>}></Route>
        <Route path='/detallesdoctor/:iddoctor' element={<DetallesDoctorElement/>}></Route>
        <Route path='listahospitales' element={<ListaHospitales></ListaHospitales>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}
