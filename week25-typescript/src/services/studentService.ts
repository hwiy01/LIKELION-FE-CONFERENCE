import { Student } from "../models/Student";

const students: Student[] = [];

// void - 반환형 나타냄
export function addStudent(student: Student): void{
    students.push(student);
}

// 마찬가지로 Student[] - 반환형 나타냄
export function getStudents(): Student[] {
    return students;
}