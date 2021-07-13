import { defaultTo } from 'lodash';
import React from 'react';
import Header from '../componentes/header/Header'
import Formulario from '../componentes/formulario/Formulario'

const Home =()=>{

    return(
        <div>
            <Header user="Usuario:usuario    Contraseña:contraseña" />
            <Formulario />
        </div>
    );
}

export default Home;