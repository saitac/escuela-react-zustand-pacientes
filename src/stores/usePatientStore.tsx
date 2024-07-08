
import { create } from "zustand"
import { v7 as uuidv7 } from "uuid";
import { ClsPatient } from "../classes/classes";


type PatientState = {
    patients: ClsPatient[];
    addPatient: (data: ClsPatient) => void;
}

const createPatient = (data: ClsPatient): ClsPatient => {
    let newPatient: ClsPatient = new ClsPatient();
    newPatient = {...data, id: uuidv7()}
    return newPatient;
}

const usePatientStore = create<PatientState>( (set) => ({
    patients: [],
    addPatient: (data: ClsPatient) => {
        set( (state) => ({
            patients: [...state.patients, createPatient(data)]
        }));
    }
}));

export {
    usePatientStore
}