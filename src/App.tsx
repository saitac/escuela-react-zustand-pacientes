import { ToastContainer, Zoom } from "react-toastify"
import PatientForm from "./components/PatientForm"
import PatientsList from "./components/PatientsList"
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <section>
      <div  className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de pacientes{' '}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>
      </div>
      <div className="mt-12 md:flex">
        <PatientForm/>
        <PatientsList/>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </section>
  )
}

export default App
