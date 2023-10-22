import { useState } from 'react'
import './taskform.css'
import Tag from '../components/Tag'
const TaskForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleTaskChange= (e) => {
    setTask(e.target.value)
  }

  const handleStatusChange= (e) => {
  setStatus(e.target.value)
  }
 
  const [task, setTask] = useState("")
  const [status, setStatus] = useState("")
  // console.log(status)
  // console.log(task)
  return (
    <header className="app-header">
        <form action="" className="form"
        onSubmit={handleSubmit}
        >
            <input type="text" className="task-input" 
            onChange={handleTaskChange}
            
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

                <select name="" id=""  className="task-status" onChange={handleStatusChange}>
                    <option value=""> select option</option>
                    <option value="todo">to do </option>
                    <option value="doing">doing </option>
                    <option value="done">done </option>
                </select>
            
                <button type="submit" className="task-submit"> + add task</button>
            </div>
        </form>
    </header>
  )
}

export default TaskForm