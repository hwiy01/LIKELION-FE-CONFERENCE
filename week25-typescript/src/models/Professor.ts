import { Gender, Person } from "./Person";

export class Professor implements Person {
    name: string;
    age: number;
    gender: Gender;
    professorId: number;
    charge?: string[];

    constructor(name: string, age: number, gender: Gender, professorId: number, charge?: string[]) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.professorId = professorId;
        this.charge = charge;
    }

    // 수강 과목 리스트 반환
    listCharges(): string[] | undefined{
        return this.charge;
    }
}