// AddStudentForm.tsx
import React, { useState } from 'react';
import { Gender } from '../models/Person';
import { Professor } from '../models/Professor';
import styled from 'styled-components';

interface AddStudentFormProps {
  onAddPerson: (professor: Professor) => void;
}

const AddProfessorForm: React.FC<AddStudentFormProps> = ({ onAddPerson }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [gender, setGender] = useState<Gender>('Male');
  const [professorId, setProfessorId] = useState<number | undefined>(undefined);
  const [courses, setCourses] = useState<string>(''); // 수강 과목 입력 필드

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (age === undefined || professorId === undefined) {
      alert('나이와 교수 ID를 입력하세요.');
      return;
    }

    const courseList = courses ? courses.split(',').map(course => course.trim()) : []; // 입력된 과목이 있으면 처리
    const newStudent = new Professor(name, age, gender, professorId, courseList); // 수강 과목 리스트 추가
    // new로 객체를 만들어서 Student 형 객체 newStudent를 만듦
    onAddPerson(newStudent);

    // 입력 필드 초기화
    setName('');
    setAge(undefined);
    setProfessorId(undefined);
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
        <label>교수 ID:</label>
        <input
          type="number"
          value={professorId === undefined ? '' : professorId} // 값이 없을 경우 빈 문자열로 처리
          onChange={(e) => setProfessorId(e.target.value ? parseInt(e.target.value) : undefined)}
        />
      </div>
      <div>
        <label>담당 과목 (쉼표로 구분):</label>
        <input
          type="text"
          placeholder="담당 과목을 쉼표로 구분하여 입력"
          value={courses}
          onChange={(e) => setCourses(e.target.value)}
        />
      </div>
      <Button type="submit">교수 추가</Button>
      </FormContainer>
    </form>
  );
};

export default AddProfessorForm;

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