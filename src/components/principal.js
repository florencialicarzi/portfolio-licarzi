import React from 'react';
import './style/principal.css';

function Principal() {
  return (
        <div className="principal">
            <div className= "centro">
                <h1>Florencia Licarzi</h1>
                <h2>FrontEnd Developer </h2>

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
