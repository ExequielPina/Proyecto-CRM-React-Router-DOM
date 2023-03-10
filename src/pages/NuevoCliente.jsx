import { useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"

function NuevoCliente() {

  const navigate = useNavigate()


  return (
    <>
       <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
       <p className="mt-3">Rellena todos los campos para registrar un nuevo cliente</p>

       <div className='flex justify-end'>
          <button className='bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded-md'
                  onClick={() => navigate(-1)}>Volver    
          </button>
       </div>

       <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

        <form>
          <Formulario />
            <input
              className="mt-5  bg-blue-800 p-3 uppercase font-bold text-white text-lg" 
              type="submit"
              value="Registrar cliente" 
            />
        </form>
        
        </div>
       

    </>
  )
}

export default NuevoCliente
