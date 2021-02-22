import React from 'react';
import prueba from './../img/prueba.jpg';
import './style/sitio.css'

function Sitio(){
    return(
        <div className= 'sit-obj'>
            <figure>
                <img src= { prueba }/>
                <div className='capa'>
                    <h2>Titulo del proyecto</h2>
                    <button>Leer más</button>
                </div>
            </figure>
        </div>
        
    );
}

export default Sitio;