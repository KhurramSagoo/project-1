import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import done from './assets/check-mark-button.png'
import doing from './assets/glowing-star.png'
import todo from './assets/direct-hit.png'

const App = () => {
  return (
    
<div className='app'>
<TaskForm />
<main className=' app--main'>
  <TaskColumn name="to do" image={todo}/>
  <TaskColumn name="doing" image={doing}/>
  <TaskColumn name="done" image={done}/>
 

</main>
</div>


  )
}

export default App