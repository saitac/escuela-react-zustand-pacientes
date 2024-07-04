import { Patient } from "../interfaces/interfaces";

class ClsPatient implements Patient {
    id: string;
    name: string;
    caretaker: string;
    email: string;
    date: Date;
    symptoms: string;

    constructor(id: string = "",
        name: string = "",
        caretaker: string = "",
        email: string = "",
        date: Date = new Date(Date.now()),
        symptoms: string = "")
    {
        this.id = id;
        this.name = name
        this.caretaker = caretaker;
        this.email = email;
        this.date = date;
        this.symptoms = symptoms;
    }
}

export {
    ClsPatient
}