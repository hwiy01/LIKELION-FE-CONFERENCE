// App.js
import React, { useState, useEffect } from 'react';
import { UserList } from './components/UserList';
import { useUsersFetch } from './hooks/useUsersFetch';
import { AddUser } from './components/AddUser';

const App = () => {
  const [users, setUsers] = useState([]);
  const { fetchUserData, loading, error } = useUsersFetch();

  useEffect(()=>{
    const getData = async() => {
      const data = await fetchUserData();
      setUsers(data);
    }
    getData();
  },[])


  if(loading) return (<div>loading..</div>)
  if(error) return (<div>error.. : {error}</div>)

  // UserList 보여주는 기능과 user add 하는 기능으로 나누기
  return (
    <div>
      <h1>UserList</h1>
      <UserList users={users} setUsers={setUsers}/>
      <AddUser users={users} setUsers={setUsers}/>
    </div>
  );
};

export default App;