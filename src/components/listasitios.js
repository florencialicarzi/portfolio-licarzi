import React from 'react';
import Sitio from './sitio';

import "./style/listasitios.css";
import img from './img/prueba.jpg';
import img2 from './img/descarga.png'

const sitiosListData = [
    {
        fondo: img,
        titulo: 'Pagina 1',
    },
    {
        fondo: img2,
        titulo: 'Pagina 2',
    },
]

function ListaSitios(){
    return(
        <div className= 'list-sit'>
            {
                sitiosListData.map((sitiosData)=> <Sitio fondo={sitiosData.fondo} titulo={sitiosData.titulo}></Sitio>)
            }
            
        </div>
    );
}

export default ListaSitios