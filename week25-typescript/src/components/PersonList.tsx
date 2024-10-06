// StudentList.tsx
import React from 'react';
import { Student } from '../models/Student';
import { Person } from '../models/Person';
import { Professor } from '../models/Professor';
import styled from 'styled-components';

interface PersonListProps {
  persons: Person[];
}

//FC : 함수형 컴포넌트
const PersonList: React.FC<PersonListProps> = ({ persons }) => {
  //타입 가드
  const isStudent = (person: Person): person is Student => {
    return (person as Student).studentId !== undefined;
  };

  const isProfessor = (person: Person): person is Professor => {
    return (person as Professor).professorId !== undefined;
  };

  return (
    <Container>
      <h2>학생 및 교수 목록</h2>
      <TableContainer>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
              <tr>
                <th>이름</th>
                <th>나이</th>
                <th>성별</th>
                <th>ID</th>
                <th>수강/담당 과목</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((person) => (
                <tr key={isStudent(person) ? person.studentId : isProfessor(person) ? person.professorId : person.name}>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>{person.gender}</td>

                  {isStudent(person) && 
                      (<>
                      <td>{person.studentId}</td>
                      <td>{person.listCourses() !== undefined && person.listCourses()?.length 
                      ? person.listCourses()?.join(', ') : '없음'}</td>
                      </>)
                  }
                  {isProfessor(person) && 
                      (<>
                      <td>{person.professorId}</td>
                      <td>{person.listCharges() !== undefined && person.listCharges()?.length 
                      ? person.listCharges()?.join(', ') : '없음'}</td>
                      </>)
                  }
                  </tr>
              ))}
            </tbody>
          </table>
      </TableContainer>
    </Container>
  );
};

export default PersonList;

const TableContainer = styled.div`
  display: flex;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`