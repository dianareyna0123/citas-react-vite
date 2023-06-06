 

const Paciente = ({pacient , setPaciente, eliminarPaciente}) => { //pacient viene de la clase listadoPacientes en el map y significa cada objeto que contiene a cada
  //paciente

  const {nombre,propietario,email,fecha,sintomas, id} = pacient;
  const handleEliminar = () =>{
    console.log('eliminando');
    const respuesta = confirm ('deseas eliminar este paciente??');

    if(respuesta){
      eliminarPaciente(id) /*llamamos a la funcion eliminarPaciente cuando le den clic al boton de eliminar*/
    }
       
  }
  return (
        <div className="m-3 bg-white shadow-lg px-5 py-10 rounded-xl">
              <p className="font-bold mb-3 text-gray-700 uppercase">Mascota: {" "}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Alta: {" "}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">

          <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={ () => { setPaciente(pacient) } /*es arrow function para esperar a que llamen al click por el argumento se llamaria sola
        el pacient es el paciente en el que le den clic recordemos que cada paciente es un objeto, este paciente se pasa a formulario para editarlo */}
          >Editar</button>

          <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
           onClick={handleEliminar}
          > Eliminar</button>

        </div>
       </div>
       
  )
}

export default Paciente
