import React, { useEffect, useState } from 'react'

export const useUsersFetch = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await response.json();
        return result;
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

  return { fetchUserData, loading, error };
}
