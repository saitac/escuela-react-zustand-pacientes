
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { v7 as uuidv7 } from "uuid";
import { ClsPatient } from "../classes/classes";

type PatientState = {
    patients: ClsPatient[];
    activePatient: ClsPatient | null;
    addPatient: (data: ClsPatient) => void;
    getPatient: (patient: ClsPatient) => void;
    deletePatient: (patient: ClsPatient) => void;
    updatePatient: (patient: ClsPatient) => void;
}

const createPatient = (data: ClsPatient): ClsPatient => {
    let newPatient: ClsPatient = new ClsPatient();
    newPatient = {...data, id: uuidv7()}
    return newPatient;
}

const usePatientStore = create<PatientState>()(
    devtools(persist((set) => ({
    patients: [],
    activePatient: null,
    addPatient: (data: ClsPatient) => {
        set( (state) => ({
            patients: [...state.patients, createPatient(data)]
        }));
    },
    getPatient: (patient: ClsPatient) => {
        set( () => ({
            activePatient: patient
        }) )
    },
    deletePatient: (patient: ClsPatient) => {
        set( (state) => ({
            patients: state.patients.filter((p: ClsPatient) => p.id !== patient.id)
        }))
    },
    updatePatient: (patient: ClsPatient) => {
        set((state) => ({
            patients: state.patients.map((p: ClsPatient) => p.id === patient.id ? patient : p ),
            activePatient: null
        }))
    }
}),{
    name:"patient-storage",
    storage: createJSONStorage(()=>localStorage)
})));

export {
    usePatientStore
}