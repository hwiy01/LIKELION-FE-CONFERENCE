// App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const addUser = () => {
    if (name && email) {
      const newUser = { id: users.length + 1, name, email };
      setUsers([...users, newUser]);
      setName('');
      setEmail('');
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Del</button>
          </li>
        ))}
      </ul>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름"/>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"/>
      <button onClick={addUser}>Add</button>
    </div>
  );
};

export default App;