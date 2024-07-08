
import { useForm } from "react-hook-form"
import Error from "./Error";
import { ClsPatient } from "../classes/classes";
import { usePatientStore } from "../stores/usePatientStore";

const PatientForm = () => {

    //const { addPatient } = usePatientStore()
    const addPatient = usePatientStore( (state) => state.addPatient );
    
    const { register, handleSubmit, formState: {errors} } = useForm<ClsPatient>();
    
    const onSubmit = (data: ClsPatient) => {
        
        addPatient(data);
        //console.log(data);
    }

    return(
        <section className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>
            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="mb-5">
                    <label
                        htmlFor="name"
                        className="text-sm uppercase font-bold"
                    >
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3 border border-gay-100"
                        type="text"
                        placeholder="Nombre del paciente"
                        {...register("name",{
                            required: "El Nombre del Paciente es obligarorio"
                        })}
                    />

                    {
                        errors.name && <Error>{errors.name?.message}</Error>
                    }
                    
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="caretaker"
                        className="text-sm uppercase font-bold"
                    >
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3 border border-gay-100"
                        type="text"
                        placeholder="Nombre del propietario"
                        {...register("caretaker",{
                            required: "El Propietario es obligarorio"
                        })}
                    />

                    {
                        errors.caretaker && <Error>{errors.caretaker?.message}</Error>
                    }

                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="text-sm uppercase font-bold"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3 border border-gay-100"
                        type="email"
                        placeholder="Email de registro"
                        {...register("email", {
                            required: "El Email es Obligatorio",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email No Válido'
                            }
                        })} 
                    />
                    {
                        errors.email && <Error>{errors.email?.message}</Error>
                    }
                </div>
                
                <div className="mb-5">
                    <label
                        htmlFor="date"
                        className="text-sm uppercase font-bold"
                    >
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3 border border-gay-100"
                        type="date"
                        {...register("date",{
                            required: "La fecha de alta es obligaroria"
                        })}
                    />

                    {
                        errors.date && <Error>{errors.date?.message}</Error>
                    }
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="symptoms"
                        className="text-sm uppercase font-bold"
                    >
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3 border border-gay-100"
                        placeholder="Síntomas del paciente"
                        {...register("symptoms",{
                            required: "Los síntomas son obligatorios"
                        })}
                    >
                    </textarea>
                    {
                        errors.symptoms && <Error>{errors.symptoms?.message}</Error>
                    }
                </div>
                
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />

            </form>
        </section>
    )

}

export default PatientForm