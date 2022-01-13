import { useState } from 'react'
import "./App.css"

function App() {
    //testt

    const [edit, setEdit] = useState({
        id: "",
        taskName: "",
        isFinished: ""
    })
    const [todos, setTodos] = useState([{
        id: "1",
        taskName: "Exam changes",
        isFinished: true
    },
    {
        id: "2",
        taskName: "Study well to pass",
        isFinished: false
    },
    {
        id: "34",
        taskName: "Play football well",
        isFinished: true
    },
    {
        id: "4",
        taskName: "Reading",
        isFinished: false
    },
    {
        id: "5",
        taskName: "Eating biriyani",
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
       
    }

    
    const todoItemSubmitHandler = (e) => {
        e.preventDefault()
        const dummy = [...todos, tempTodoItem]
        console.log(dummy)
        setTodos(dummy)
    }


    // its carrying map's id
    // filter will check the id is equal or not
    // if the id is eqaual it will disappear
    //and list others
    const todoItemDeleteHandler = (id) => {
        const items = [...todos];
        const updateList = items.filter(item => item.id !== id);
        setTodos(updateList)
    }
    // its carrying map's  id
    const todoItemCheckHandler = (id) => {
        const items = [...todos]
        // interchange the status only if the id'are equal(filter item id&map id)
        //and list
        const updateList = items.filter((item) => {
            if (item.id === id) {
                item.isFinished = !item.isFinished
            }
            return item
        })
        setTodos(updateList)
    }
    //its carriying mpas's id
    // ????
    const todoEditHandler = (id) => {
        const items = [...todos]
        const updateList = items.filter((item) => {
            if (item.id === id) {
                setEdit({
                    id: item.id,
                    taskName: item.taskName,
                    isFinished: item.isFinished,

                })
            }
        })
    }
        // passing edit state
    const dummyInputHandler = (e, edit) => {
        // tempValue will store the data which will get from input form using e .target.value
        const tempValue = e.target.value
        setEdit({
            id: edit.id,//?
            taskName: tempValue,//?
            isFinished: edit.isFinished,//?
        })

    }
    const editSUbmitHandler = (e) => {
        e.preventDefault()
        // 1.List the full array todos
        // 2.print the tempitem if the item id  and the edit id's are not equal
        // 3.why using spread orpeator for updateList?(its an array looping,its already spread all the items after filtering .is that right?)
        // 4.edit is an empty string?any id's is passing?
        const items = [...todos];
        const updateList = items.filter(item => item.id !== edit.id);
        const tempItem = [...updateList, edit]
        console.log(tempItem)
    }
    return (
        <div className="App" >
            <div className='wrapper' >
                <h1 className='title' > All Task </h1>
                {/* <form onSubmit={todoItemSubmitHandler}>
                    <input onChange={inputChangeHandler}
                        className='form'
                        type='text'
                        placeholder='Add todo'
                        value={edit} />
                    <button type="submit" className='button' >+</button>
                </form> */}
                <form onSubmit={editSUbmitHandler}>
                    <input
                        placeholder='Edit Task'
                        onChange={(e) => dummyInputHandler(edit)}
                        defaultValue={edit.taskName}
                    />
                    <button type='submit'>Update</button>
                </form>
                <ul className='todo-list' > {
                    todos.map((toDo) => {
                        return (
                            <li key={toDo.id} style={{ "text-decoration": toDo.isFinished ? "line-through" : "none" }}>
                                {toDo.taskName}
                                <input
                                    type="checkbox"
                                    onChange={() => todoItemCheckHandler(toDo.id)}
                                    value={toDo.isFinished}
                                />
                                <button className='delete-button' onClick={() => todoItemDeleteHandler(toDo.id)}>x</button>
                                <button className='edit-button' onClick={() => todoEditHandler(toDo.id)} >Edit</button>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default App;