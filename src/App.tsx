import React, { useState } from 'react'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import { Task } from './components/Types'
import './App.css'
import Tour from "./components/Tour";

const initialState: Task[] = [//初期値を定義
    {
        id: 2,
        title: '次のTodo',
        done: false
    },{
        id: 1,
        title: '最初のTodo',
        done: true
    }
]

const App: React.FC = () => {
    const [tasks, setTasks] = useState(initialState)// useStateに渡した値がstateの初期値になる
    const [thema,setThema] = useState(false)

    return (
        <div id={thema ? 'dark' : ''}>
            <TaskInput tasks={tasks} setTasks={setTasks} thema={thema} setThema={setThema}/>
            <TaskList tasks={tasks} setTasks={setTasks} />
            <Tour/>
        </div>
    )
}

export default App