import React from "react";
import "../hojas-de-estilo/boton.css";

// Otra forma de usar props, se pone directamente la propiedad que se va a utilizar
//se llama sintaxis de desestructuracion

function Boton({texto, esBotonClic, manejarClic}){
  return(
    //se utiliza el operador ternario para saber que tipo de boton se va a utilizar
    
    <button 
    className={ esBotonClic ? "boton-clic" : "boton-reiniciar" }
    // este es el evento del boton, permite llamar a la función manejarClic
    onClick = {manejarClic}>
      {texto}
    </button>

  );

}
export default Boton;

