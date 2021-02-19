import React from 'react';
import './style/sobremi.css';

function Sobremi(){
    return(
        <div className= 'sm'>

            <div className='texto'>
                <h2>Soy una desarrolladora web apasionada 
                por crear sitios funcionales y con un
                diseño agradable para el usuario.</h2>
            </div>

            <div className='skills'>
                <h2>SKILLS</h2>
                
                <ol>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.Js</li>
                    <li>Node.Js</li>
                </ol>

                <h2>OTRAS HABILIDADES</h2>
                <ol>
                    <li>Git, GitHub</li>
                    <li>Photoshop, Illustrator</li>
                </ol>
            </div>
            
        </div>
    )
}

export default Sobremi;