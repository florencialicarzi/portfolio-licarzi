import React from 'react';
import ListaSitios from './listasitios';
import './style/proyectos.css';

function Proyectos(){
    return(
        <div className= 'proy'>
            <h1>Mis proyectos<b>.</b></h1>
            <div className='lista-sitios'>
                <ListaSitios>
                </ListaSitios>
            </div>
        </div>
    );
}

export default Proyectos;