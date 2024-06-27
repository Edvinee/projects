import React, {useState} from 'react';
import axios from 'axios';
const Todo=()=>{
    const labels = ['Task Title', 'Personnel', 'Start Date', 'End Date'];
    const inputTypes = ['text','number','date-time-local','datetime-local'];
    const [task, setTask]= useState({tittle:"", personnel:0, start:"",end:""});
    const handleChange=(event) => {
        const {name,value}= event.target;
        setTask(prevState=> ({...prevState,[name]:value}));

    };
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try{
            const response = await axios.post('http://localhost:3002/api/v1/tasks/', task,{
                headers: {'Content-Type':'application/json'}
            });
            if (response.status===200 || response.status ===201){
                console.log('Task submitted succesfully');
                setTask({tittle:"", personnel:0, start:"", end:""});
            } else console.error('Failed to submit task');
        } catch(error){
            console.error('Error submitting task:', error);
        }
    };
    return(
        <div>
            <h1>Tasks</h1>
            <form onSubmit={handleSubmit}>
      {Object.entries(task).map(([key, value], index) => (
        <div key={key}>
          <label>{labels[index]}</label>
          <input type={inputTypes[index % inputTypes.length]} name={key} value={value} onChange={handleChange} placeholder={`Enter ${labels[index]}`} />
        </div>
      ))}
      <button type="submit">Submit</button>
      <ol>
        {Object.values(task).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ol>
    </form>
 

export default Todo;
        </div>
    );
};