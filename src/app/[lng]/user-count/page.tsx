'use client'

import React from 'react'

const UserCount = () => {

  const [count, setCount] = React.useState(null);

  React.useEffect(() => {
    const fetchUserCount = async () => {
      const res = await fetch('/api/user-count');
      const data = await res.json();
      if (res.ok) {
        setCount(data.count);
      } else {
        alert(data.error);
      }
    };

    fetchUserCount();
  }, []);

  return (
    <div>
      <h1>Number of Registered Users</h1>
      <p>{count !== null ? count : 'Loading...'}</p>
    </div>

  )
}

export default UserCount