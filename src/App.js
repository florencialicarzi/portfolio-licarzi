import './App.css';
import Principal from "./components/principal";
import Sobremi from "./components/sobremi";
import Proyectos from "./components/proyectos";

function App() {
  return (
    <div className="App">
      <Principal 
        nombre='Florencia Licarzi' 
        posicion='FrontEnd Developer'
      >
      </Principal>

      <Sobremi
        textoDescripcion='Soy una desarrolladora web apasionada 
        por crear sitios funcionales y con un
        diseño agradable para el usuario.'
      >
      </Sobremi>
      <Proyectos></Proyectos>
    </div>
  );
}

export default App;
