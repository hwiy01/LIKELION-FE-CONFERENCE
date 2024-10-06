import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddStudentForm from './components/AddStudentForm';
import StudentList from './components/PersonList';
import { Student } from './models/Student';
import { Person } from './models/Person';
import AddProfessorForm from './components/\bAddProfessorForm';
import PersonList from './components/PersonList';
import styled from 'styled-components';

const App: React.FC = () => {
  const [persons, setPersons] = useState<Person[]>([])
  const [type, setType] = useState('student')

  const handleType = (type: string) => {
    setType(type);
  }

  const handleAddPerson = (person: Person) => {
    setPersons([...persons, person]);
  }

  useEffect(()=>{
    console.log(persons);
  },[persons])

  return (

    <Container>
      <AppContainer>
      <Title>🧑‍🎓 학생 및 교수 관리 시스템 👨‍🏫</Title>
      <FormContainer>
      <form action="#">
        <label htmlFor="type">유형</label>
        <DropboxContainer>
        <select name="languages" id="type" onChange={(e)=>handleType(e.target.value)}>
          <option value="professor">교수</option>
          <option selected value="student">학생</option>
        </select>
        </DropboxContainer>
      </form>
      </FormContainer>
      {type === "professor" ? 
      (<AddProfessorForm onAddPerson={handleAddPerson}/>)
      :(<AddStudentForm onAddPerson={handleAddPerson}/>)}
      <PersonList persons={persons}/>
      </AppContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  width: 50%;
  padding: 10% 7% 10% 7%;
`

const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 25px;
  border-bottom: dotted 2.5px grey;
  padding: 10px;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const DropboxContainer = styled.span`
  margin-left: 5px;
`