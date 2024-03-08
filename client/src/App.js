import React, { useEffect, useState } from 'react';

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('/data')
      .then(response => response.json())
      .then(data => setBackendMessage(data.message))
      .catch(err => console.error("Error fetching data: ", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Data from the backend: {backendMessage}</p>
      </header>
    </div>
  );
}

export default App;
