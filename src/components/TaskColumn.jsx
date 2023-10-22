import TaskCard from './TaskCard'
import './taskcolumn.css'
const TaskColumn = ({image,name}) => {
  return (
    <section className='task--column'>
<h2 className='task-column-heading'>
    <img src={image} alt="" className='task-column-icon' />
    {name}</h2>

    <TaskCard />
  </section>
  )
}

export default TaskColumn