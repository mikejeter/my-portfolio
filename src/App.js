import React, { useState, useEffect } from 'react';
import Pages from './pages';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Note: Use username below
    fetch('https://gitconnected.com/v1/portfolio/mikejeter')
    .then(res => res.json())
    .then(user => {
      setUser(user);
    });
  },[]);

  if (!user) {
    return <div />
  }

  return <Pages user={user} />

}

export default App;
