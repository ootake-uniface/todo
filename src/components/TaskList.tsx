import React from 'react'
import TaskItem from './TaskItem'
import { Task } from './Types'
//export defaultを持っていないので、{}で囲む 

type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>//配列を加工するための関数ですよ、という宣言?(自信なし)
}
 
const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
 
    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(t =>          //mapで全て表示
            t.id === task.id                    //TaskItemから受け取ったtaskのidと、tのidが一致しているか検証
                ? { ...task, done: !task.done } //一致していたら、!でbooleanのためtrue,falseが逆転してdoneに代入される
                : t                             //一致していない場合は何もしない
        ))
    }
 
    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter(t =>
            t.id !== task.id//配列の中身を検索(filter)、t.idとtask.idが同じものを除外
        ))
    }
 
    return (
        <div className="inner">
        {
            tasks.length <= 0 ? '登録されたTODOはありません。' :
            <ul className="task-list">
            { tasks.map( task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                />
            )) }
            </ul>
        }
        </div>
    )
}
 
export default TaskList