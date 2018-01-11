import React from 'react';

const UserList = ({ users }) => {
  let userList = users.map(user => {
    return <div key={user.username}>{user.username}</div>;
  });
  return <div>{userList}</div>;
};

export default UserList;
