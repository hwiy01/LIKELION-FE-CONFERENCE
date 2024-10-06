// AddStudentForm.tsx
import React, { useState } from 'react';
import { Gender } from '../models/Person';
import { Student } from '../models/Student';
import styled from 'styled-components';

// 객체 구조를 정의
interface AddStudentFormProps {
  onAddPerson: (student: Student) => void;
  // Student 타입의 객체를 인자로 받고, 반환값이 없는 함수임을 정의
  // 학생 추가 작업을 처리하는 부모 컴포넌트로부터 전달받을 콜백 함수
}

// <AddStudentFormProps>로 컴포넌트가 받는 props 구조 명확하게 정의
const AddStudentForm: React.FC<AddStudentFormProps> = ({ onAddPerson }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<Gender>('Male');
  const [studentId, setStudentId] = useState<number | undefined>(undefined);
  const [courses, setCourses] = useState<string>(''); // 수강 과목 입력 필드

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age === undefined || studentId === undefined) {
      alert('나이와 학생 ID를 입력하세요.');
      return;
    }

    const courseList = courses ? courses.split(',').map(course => course.trim()) : []; // 입력된 과목이 있으면 처리
    const newStudent = new Student(name, age, gender, studentId, courseList); // 수강 과목 리스트 추가
    // new로 객체를 만들어서 Student 형 객체 newStudent를 만듦
    onAddPerson(newStudent);

    // 입력 필드 초기화
    setName('');
    setAge(undefined);
    setStudentId(undefined);
    setCourses(''); // 수강 과목 입력 필드 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
      <div>
        <label>이름:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>나이:</label>
        <input
          type="number"
          value={age === undefined ? '' : age} // 값이 없을 경우 빈 문자열로 처리
          onChange={(e) => setAge(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      </div>
      <div>
        <label>성별:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value as Gender)}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>학생 ID:</label>
        <input
          type="number"
          value={studentId === undefined ? '' : studentId} // 값이 없을 경우 빈 문자열로 처리
          onChange={(e) => setStudentId(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      </div>
      <div>
        <label>수강 과목 (쉼표로 구분):</label>
        <input
          type="text"
          placeholder="수강 과목을 쉼표로 구분하여 입력"
          value={courses}
          onChange={(e) => setCourses(e.target.value)}
        />
      </div>
      <Button type="submit">학생 추가</Button>
      </FormContainer>
    </form>
  );
};

export default AddStudentForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  width: 30%;
  margin-top: 15px;
  background-color: skyblue;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  margin-bottom: 15px;
  &:hover{
    background-color: #6a8fde;
    transition: 0.3s;
  }
`