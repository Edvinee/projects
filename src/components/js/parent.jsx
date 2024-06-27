import './App.css';
import Todo from './components/Todo';
import React, { useState } from 'react';
const App = () => {
  const [dataFromChild, setDataFromChild] = useState('');
  const handleDataFromChild = (data) => {
    // Handle data received from child component
    setDataFromChild(data);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data from Child Component: {dataFromChild}</p>
      <Todo sendDataToParent={handleDataFromChild} />
    </div>
  );
};
export default App;