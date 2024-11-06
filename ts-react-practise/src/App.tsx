
import './App.css'

function App() {

  const Todo1 = {
    id: 1,
    title: "Learn React",
    completed: false
  }
  return (
    <>
      <Todo {...Todo1} />
    </>
  )
}
interface TodoProp  { 
  id: number;
  title: string;
  completed: boolean;
}

function Todo(props: TodoProp) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.completed ? "Completed" : "Not Completed"}</p>
    </div>
  )
  
}

export default App
