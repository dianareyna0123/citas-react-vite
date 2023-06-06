 import {useState, useEffect} from "react";

import Fallo from "./Fallo";

//rafce atajo para crear la funcion automaticamente 
const Formulario = ({setPacientes, Pacientes, Paciente,setPaciente }) => {
  const [nombre, setNombre] = useState(''); //estos hooks deben ser declarados hasta arriba dentro de la funcion, antes del return y
  // no pueden estar en condicionales no puede haber un return antes del hook
  //aqui usamos el state para saber que escribe el usuario en cada input 
  const [propietario, setPropietario] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [sintomas, setSintomas] = useState(''); 
  const [error, setError] = useState(false);
  useEffect (()=>{ 
    //revisa los cambios finalizados en los componentes o states, solo se ejecuta cuando hay un cambio
    if(Object.keys(Paciente).length>0){ //pasamos el objeto al que le damos clic a las constantes de aqui que se conectan con cada campo del formulario
     setNombre(Paciente.nombre)
     setPropietario(Paciente.propietario)
     setEmail(Paciente.email)
     setFecha(Paciente.fecha)
     setSintomas(Paciente.sintomas)}
  },[Paciente]);

  useEffect(()=>{

  },[]); //si paso mis dependencias, las dependencias son entre corchetes [] vacias en el useEffect solo se va a ejecutar 1 vez
 

  const generarId = () =>{ //necesitamos si o si un id para cada paciente en este caso lo generamos con estas funciones
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random+fecha;
  }
 

  const handleSubmit = (e) => { //funcion cuando se envia el formulario
    e.preventDefault(); // prevenir que se envie el formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')) // includes ('') es para saber si el arreglo incluye alhun dato vacio
    {
      console.log('hay al menos un campo vacio'); 
      setError(true);
      return;
    }
    setError(false);

    //objeto de paciente 

    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
       
    }

    if(Paciente.id){ //si apciente tiene un id es poque se presione editar y lleno el objeto paciente que viene de nuestra clase padre que pasa por la clase paciente
      // ahi se llena

      //editando registro
      objetoPaciente.id = Paciente.id;
      // console.log(objetoPaciente);
      // console.log(Paciente);
      const pacientesActualizados = Pacientes.map(pacienteState => pacienteState.id === Paciente.id ? objetoPaciente : pacienteState ); //itera en todos los pacientes
      //hasta encontrar el id que le pasamos de paciente recordemos que paciente es el objeto que se llena con el paciente que estamos editando,
      //al encontrar el id se le pasa el objeto con los datos actualizados, para los pacientes que no concuerden con el id se pasa 
      //pacienteState esa variable contiene los pacientes sin actualizar osea los originales que viene del objeto Pacientes
      setPacientes(pacientesActualizados);
      setPaciente({}); //limpiamos el state de editar paciente

    } else{
      //nuevo registro

    //tomamos copias de lo que ya existe para no modificar el arreglo original
     objetoPaciente.id = generarId();
    setPacientes([...Pacientes,objetoPaciente]); // tomamos una copia de lo que hay en pacientes y le agrega el nuevo objeto de objetoPaciente y lo manda por setPacientes
    // a la clase padre, toma la copia y agrega al final el nuevo dato ayudandose de la sintaxis del objetoPaciente y manda los datos por medio de setPaciente
    //el usestate de set paciente que tenemos en app.jsx es de tipo array comienza como un array vacio y se va llenando con las copias del objeto
    }

 
  

    //vamos a reinciar el formulario

    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {' '}  
      <span className=" text-indigo-600 font-bold  ">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10 mx-5">
        {error && <Fallo>  <p> todos los campos son obligatorios</p></Fallo>/*si error es true para eso son los && */ }

        <div className="mb-5">
          <label htmlFor="nombre" className="block text-gray-70 uppercase font-bold">Nombre Mascota</label>

          <input id="nombre" type="text" placeholder="Nombre de Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
          value={nombre /*toma el valor del state nombre*/} 
          onChange={ (e) => setNombre(e.target.value) /*cada vez que el usuario escribe aparece escribiendo en la consola */ }/>
        </div>

        
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-70 uppercase font-bold">Nombre Propietario</label>

          <input id="propietario" type="text" placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario} 
                    onChange={ (e) => setPropietario(e.target.value) /*cada vez que el usuario escribe aparece escribiendo en la consola */ }/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-70 uppercase font-bold">Email</label>

          <input id="email" type="email" placeholder="Tu email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={email} 
           onChange={ (e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-70 uppercase font-bold">Alta</label>

          <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
           value={fecha} 
           onChange={ (e) => setFecha(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-70 uppercase font-bold">Sintomas</label>

          <textarea id="sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe los Sintomas"
           value={sintomas} 
           onChange={ (e) => setSintomas(e.target.value)}/>


        </div>
 
        <input type="submit" className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"  
         
        value={Paciente.id ? 'editar Paciente' : 'Agregar paciente'} />
      </form>

    </div>
  )
}

export default Formulario;

