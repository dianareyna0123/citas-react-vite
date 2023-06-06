import {useState, useEffect} from "react";
import Paciente from "./Paciente"



const ListadoPacientes = ({Pacientes, setPaciente,eliminarPaciente}) => {
  useEffect (()=>{ 
    //revisa los cambios finalizados en los componentes o states, solo se ejecuta cuando hay un cambio
    if(Pacientes.length > 0){
      console.log("nuevo paciente")
    }
     
  },[Pacientes]);
 
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {Pacientes && Pacientes.length ? (    
        <> 
           <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
            <p className="text-lg mt-5 mb-10 text-center">Administra tus:{" "}
            <span className="text-indigo-600 font-bold  ">Pacientes</span>
           </p>

          {
            Pacientes.map((pacient) =>{ //esta recorriendo el arreglo pacientes que le pasamos de la clase padre
              return(
                <Paciente
                key={pacient.id }//extraemos el id que creamos con la funcion generarId en la clase formulario y lo pasamos como 
                //el key que es super necesario
                pacient={pacient}
                setPaciente={ setPaciente} //pasamos la funcion setPaciente que accede a cada paciente individual a la clase paciente
                eliminarPaciente={eliminarPaciente} //recibimos la funcion por parametros y la pasamos al componente paciente 
               
                 />
              )
            })
          }
          </>  ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
            <p className="text-lg mt-5 mb-10 text-center">Comienza agregando{" "}
            <span className="text-indigo-600 font-bold  ">Pacientes</span>
           </p>
 
                          </>)}
 

        
     
    </div>
  )
}

export default ListadoPacientes
