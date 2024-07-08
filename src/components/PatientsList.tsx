
import { usePatientStore } from "../stores/usePatientStore"

const PatientsList = () => {

    const patients = usePatientStore( (state) => state.patients );

    return(
        <>
            {
                patients.map( p => <p key={p.id}>{p.name}</p>)
            }
            <h1>HOLA 1</h1>
        </>
    )
}

export default PatientsList