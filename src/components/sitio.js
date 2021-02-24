import React from 'react';
import './style/sitio.css'

function Sitio({fondo,titulo}){
    return(
        <div className= 'sit-obj'>
            <figure>
                <img src={fondo}/>
                <div className='capa'>
                    <h2>{titulo}</h2>
                    <button>Leer más</button>
                </div>
            </figure>
        </div>
        
    );
}

export default Sitio;