import React, { useState } from 'react'

export const AddUser = ({users, setUsers}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addUser = () => {
        if (name && email) {
          const newUser = { id: users.length + 1, name, email };
          setUsers([...users, newUser]);
          setName('');
          setEmail('');
        }
      };    

  return (
    <>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름"/>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"/>
        <button onClick={addUser}>Add</button>
    </>
  )
}
