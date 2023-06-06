import Header from "./componentes/Header"; //importamos la funcion Header de la clase Header 
import Formulario from "./componentes/formulario";
import ListadoPacientes from "./componentes/ListadoPacientes";
import {useState, useEffect} from 'react'
import Paciente from "./componentes/Paciente";

function App() {
  // <> </> esto es un fragment para que sea el nivel mas alto, solo podemos retornar un nivel mas alto
  //lo que esta dentro del return es lo que se vera en pantalla es codigo html, afuera tenemos codigo javascript

  const [Pacientes, setPacientes] = useState([]); // esta declarado como un arreglo
  const [Paciente, setPaciente] = useState({}); //es de tipo objeto porque cada paciente esta en un objeto para editarlos

  useEffect(() => {
    const obtenerLocalS = () =>{
      const pacientesLocalS = JSON.parse(localStorage.getItem ('Pacientes')) ?? []; //recibe pacientes
      setPacientes(pacientesLocalS);
    }
    obtenerLocalS();
  },[]) //se ejecuta solo una vez

  useEffect (()=>{//escucha todos los cambios en un elemento

    localStorage.setItem('Pacientes', JSON.stringify(Pacientes)); //JSON.stringify convierte un arreglo en un string envia pacientes al local storage
  }, [Pacientes]);

  const eliminarPaciente = (id) => { //pasa el idi del paciente que estamos eliminando
    const pacientesActualizados = Pacientes.filter (Paciente => Paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
   <div className=" container mx-auto mt-10">
    {/*dentro de estas llaves puedo colocar codigo javascript*/}
    <Header
     
    />
      <div className=" mt-12 md:flex"> 

      <Formulario 
      setPacientes = {setPacientes} 
      Pacientes = {Pacientes}
      Paciente = {Paciente} //pasamos la variable que contiene un paciente individual para mostrarlo en el formulario
      setPaciente ={setPaciente} 
      />

      <ListadoPacientes
      Pacientes ={Pacientes}
      setPaciente ={setPaciente} //pasamos la funcion para modificar Paciente individual para editarlo o eliminarlo
      eliminarPaciente ={eliminarPaciente} //pasamos la funcion eliminarPaciente a listadoPacientes
      />
      </div>
  </div>
   
  )
//props es una forma de pasar variables o funciones de un componente a otro (propiedades) el state que crees en cada componente solo estara disponible en ese componente 
//para pasarlos a otros componentes usamos los props , se pasan del padre al hijo nunca del hijo al padre si vas a pasar los state por varias clases registralas 
//en la clase padre (app.jsx) ejemplo sintaxis numeros={1}

//porp children, la viariable children va a tomar todo lo que le pases al props, se pueden pasar html por medio de este prop

//useEffect es un callback arrow function, se ejecuta cuando un state cambia o cuando el componente esta listo 
}

export default App
