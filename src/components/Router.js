import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuDoctores from './MenuDoctores';
import Doctores from './Doctores';

export default class Router extends Component {
 
    render() {

        function HospitalId() {
            var { id } = useParams();
            return <Doctores id={id}/>
          }

    return (
      <BrowserRouter>
      <MenuDoctores/>
        <Routes>
        <Route path="/doctores/:id" element={<HospitalId/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
