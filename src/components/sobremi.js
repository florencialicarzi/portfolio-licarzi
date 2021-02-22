import React from 'react';
import './style/sobremi.css';

function Sobremi({textoDescripcion}){
    return(
        <div className= 'sm'>

            <div className='texto'>
                <p>{textoDescripcion}</p>
            </div>

            <div className='skills'>
                <h2>SKILLS</h2>
                
                <ol>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.Js</li>
                    <li>Node.Js</li>
                </ol>

                <h2>OTROS CONOCIMIENTOS</h2>
                <ol>
                    <li>Git, GitHub</li>
                    <li>Photoshop, Illustrator</li>
                </ol>
            </div>
            
        </div>
    )
}

export default Sobremi;