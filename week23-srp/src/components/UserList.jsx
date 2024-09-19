import React, { useEffect, useState } from 'react'
import { useUsersFetch } from '../hooks/useUsersFetch';

export const UserList = ({users, setUsers}) => {
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

  return (
    <ul>
        {users.map((user) => (
          <li>
            {user.name} - {user.email}
            <button onClick={() => deleteUser(user.id)}>Del</button>
          </li>
        ))}
      </ul>
  )
}
