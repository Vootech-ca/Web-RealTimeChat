import React from 'react';
import UserCard from '../../components/usercard/UserCard';

function Home() {
  return (
    <div className="container mt-20 mx-auto h-full">
      <div className="grid xl:grid-cols-4 sm:grid-cols-2  grid-cols-1 p-10 sm:p-0  gap-20">
        <UserCard status="active" />
        <UserCard status="not-active" />
        <UserCard status="active" />
        <UserCard status="active" />
      </div>
    </div>
  );
}

export default Home;
