export type Gender = "Male" | "Female";
// Gender는 union 타입

export interface Person {
    name: string;
    age: number;
    gender: Gender;
}