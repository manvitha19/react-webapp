import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from './UserCard';

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.example.com/users');
        setUsers(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="user-grid">
      {Array.isArray(users) && users.length > 0 ? (
        users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            fullName={user.fullName}
            avatar={user.avatar}
            title={user.title}
          />
        ))
      ) : (
        <div>No users found.</div>
      )}
    </div>
  );
};

export default UserGrid;
