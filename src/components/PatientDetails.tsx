import { toast } from "react-toastify"
import { ClsPatient } from "../classes/classes"
import { usePatientStore } from "../stores/usePatientStore"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = {
    paciente: ClsPatient
}

const PatientDetails = ({paciente}: PatientDetailsProps) => {

    const getPatient = usePatientStore( (state) => state.getPatient );
    const deletePatient = usePatientStore( (state) => state.deletePatient );

    const HandleBtnEditOnClick = (paciente: ClsPatient) => {
        getPatient(paciente);
    }

    const HandleBtnDeleteOnClick = (paciente: ClsPatient) => {
        deletePatient(paciente);
        toast("Paciente Eliminado",{
            type: "error"
        })
    }

    return(
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label="ID" data={paciente.id}/>
            <PatientDetailsItem label="Nombre" data={paciente.name}/>
            <PatientDetailsItem label="Propietario" data={paciente.caretaker}/>
            <PatientDetailsItem label="Email" data={paciente.email}/>
            <PatientDetailsItem label="Fecha Alta" data={paciente.date.toString()}/>
            <PatientDetailsItem label="Síntomas" data={paciente.symptoms}/>
            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
                    uppercase rounded-lg"
                    onClick={()=>HandleBtnEditOnClick(paciente)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
                    uppercase rounded-lg"
                    onClick={()=>HandleBtnDeleteOnClick(paciente)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default PatientDetails