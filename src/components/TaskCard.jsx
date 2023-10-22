import Tag from './Tag'
import './taskcard.css'
import deleticon from '../assets/delete.png'
const TaskCard = () => {
  return (
    <article className='task-card'>
        <p className='task-text'>
this is sample text
        </p>
    <div className="task-card-bottom-line">
    <div className="task-card-tag">
        <Tag  tagName="html"/>
        <Tag  tagName="css"/>
    </div>

    <div className="task-delete">
      <img src={deleticon} alt="" className='task-card-image'/>

    </div>
    </div>

    </article>
  )
}

export default TaskCard