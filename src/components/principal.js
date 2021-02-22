import React from 'react';
import './style/principal.css';

function Principal({nombre,posicion}) {
  return (
        <div className="principal">
            <div className= "centro">
                <h1>{nombre}</h1>
                <h2>{posicion}</h2>

                <div className="nav">
                    <a data-target="sobremi" title="Sobre mi" href="#">Sobre mi</a>
                    <b>/</b>
                    <a data-target="proyectos" title="Proyectos" href="#">Proyectos</a>
                    <b>/</b>
                    <a data-target="contacto" title="Contacto" href="#">Contacto</a>
                </div>
            </div>          
        </div>
  );
}

export default Principal;
