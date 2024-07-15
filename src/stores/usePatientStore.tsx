
import { create } from "zustand"
import { v7 as uuidv7 } from "uuid";
import { ClsPatient } from "../classes/classes";

type PatientState = {
    patients: ClsPatient[];
    activePatient: ClsPatient | null;
    addPatient: (data: ClsPatient) => void;
    editPatient: (patient: ClsPatient) => void;
    deletePatient: (patient: ClsPatient) => void;
}

const createPatient = (data: ClsPatient): ClsPatient => {
    let newPatient: ClsPatient = new ClsPatient();
    newPatient = {...data, id: uuidv7()}
    return newPatient;
}

const usePatientStore = create<PatientState>( (set) => ({
    patients: [],
    activePatient: null,
    addPatient: (data: ClsPatient) => {
        set( (state) => ({
            patients: [...state.patients, createPatient(data)]
        }));
    },
    editPatient: (patient: ClsPatient) => {
        console.log("edit", patient);
    },
    deletePatient: (patient: ClsPatient) => {
        set( (state) => ({
            patients: state.patients.filter((p: ClsPatient) => p.id !== patient.id)
        }))
    },
}));

export {
    usePatientStore
}