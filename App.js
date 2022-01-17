import React from "react";
import "./App.css"
import { useState } from "react";
import MenuTitle from "./MenuTitle";
import InputForm from "./InputForm";

function App() {
  const [edit, setEdit] = useState({
    id: "",
    taskName: "",
    isFinished: ""
  })
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

  const editSUbmitHandler = (e) => {
    e.preventDefault()
    const items = [...todos];
    const updateList = items.filter(item => item.id !== edit.id);
    const tempItem = [...updateList, edit]
    console.log(tempItem)
  }

  const dummyInputHandler = (e, edit) => {
    const tempValue = e.target.value
    setEdit({
      id: edit.id,
      taskName: tempValue,
      isFinished: edit.isFinished,
    })
  }

  return (
    <div>
      < MenuTitle />
      <InputForm/>
      

    </div>

  )
}
export default App;
