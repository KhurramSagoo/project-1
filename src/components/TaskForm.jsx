import { useState } from 'react'
import './taskform.css'
import Tag from '../components/Tag'
const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task:"",
    status:"todo",
  })

  const handleChange=(e)=>{
    
    // const name=e.target.name;
    // const value=e.target.value;
    const {name, value} =e.target;
    // console.log(e.target)
    setTaskData((prev)=>{
        return{
          ...prev, [name]:value
        }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData)
  }

  // const handleTaskChange= (e) => {
  //   setTask(e.target.value)
  // }

  // const handleStatusChange= (e) => {
  // setStatus(e.target.value)
  // }
 
  // const [task, setTask] = useState("")
  // const [status, setStatus] = useState("")
  // console.log(status)
  // console.log(task)
  return (
    <header className="app-header">
        <form action="" className="form"
        onSubmit={handleSubmit}
        >
            <input type="text" className="task-input" 
            name='task'
            onChange={handleChange}
            
            placeholder="Enter your task"/>

            <div className="task-form-bottom-line">
                <Tag tagName="html" />
                <Tag tagName="css" />
                <Tag tagName="js" />
                <Tag tagName="react" />
                {/* <button className="tag">HTML</button>
                <button className="tag">CSS</button>
                <button className="tag">JavaScript</button>
                <button className="tag">React</button> */}

                <select name="status" id=""  className="task-status" onChange={handleChange}>
                    {/* <option value=""> select option</option> */}
                    <option value="todo">to do </option>
                    <option value="doing">doing </option>
                    <option value="done">done </option>
                </select>
            
                <button type="submit" className="task-submit" onSubmit={handleSubmit}> + add task</button>
            </div>
        </form>
    </header>
  )
}

export default TaskForm