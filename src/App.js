
import './App.css';
import Boton from "./componentes/boton";
import Contador from './componentes/contador';
import logo from "./imagenes/logo2.jpg"; //esta es otra forma de insertar imagenes
import { useState} from "react";


function App() {

      const [numClics, setNumClics] = useState(0); 
      
      // Definición de funciones en el componente principal
      const manejarClic = () => {
            setNumClics(numClics + 1);
        //console.log("Clic Ok");
      };

      const reiniciarContador = () => {
        setNumClics(0);
        //console.log("Reiniciar Ok");//este console, sirve de prueba
      };
      
      return (
        <div className="App">
          <div className = "logo-contenedor"> 
            <img 
              className ="logo" 
              src={logo}
              alt="Logo"/>
          </div>
          
           <div className='contenedor-principal'>
            <Contador numClics = {numClics} 
           />

            <Boton
              texto = "Clic"
              esBotonClic ={true}
              manejarClic={manejarClic}
            />

            <Boton
              texto = "Reiniciar"
              esBotonClic ={false}
              manejarClic={reiniciarContador} 
            />
          </div>
        </div>
      );
}

export default App;
