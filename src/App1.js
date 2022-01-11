import { useState } from 'react'
import "./App.css"

function App() {

    // const [states, setStates] = useState("")
    const [todos, setTodos] = useState([{
            id: "1",
            taskName: "Exam",
            isFinished: true
        },
        {
            id: "2",
            taskName: "Study",
            isFinished: false
        },
        {
            id: "3",
            taskName: "Play",
            isFinished: true
        },
        {
            id: "4",
            taskName: "Reading",
            isFinished: false
        },
        {
            id: "5",
            taskName: "Eating",
            isFinished: true
        },
    ])

    const tempTodoItem = {
        id: Math.random(),
        taskName: "",
        isFinished: false
    }
    const inputChangeHandler = (e) => {
        tempTodoItem.taskName = e.target.value;
        // tempTodoItem.id = ;
    }

    // Go to class
    const todoItemSubmitHandler = (e) => {
        e.preventDefault()
        const dummy = [...todos, tempTodoItem]
        console.log(dummy)
        setTodos(dummy)
    }

    return ( <
        div className = "App" >
        <
        div className = 'wrapper' >
        <
        div className = 'title' > All Task < /div> <
        div >
        <
        form onSubmit = { todoItemSubmitHandler } >
        <
        input onChange = { inputChangeHandler }
        className = 'form'
        type = 'text'
        placeholder = 'Add todo' / >
        <
        button type = "submit"
        className = 'button' > + < /button> <
        /form> <
        /div> <
        ul className = 'todo-list' > {
            todos.map((toDo) => {
                return ( <
                    li key = { toDo.id } > { toDo.taskName } { /* {toDo.isFinished ? <input type={checkbox}/> : <span style={{ color: "green" }}>Not finished</span>} */ } <
                    input type = "checkbox"
                    checked = { toDo.isFinished }
                    /> <
                    /li>
                )
            })
        } <
        /ul> <
        /div> <
        /div>
    );
}

export default App;