import React, { useState } from 'react'
import { Task } from './Types'
//export defaultを持っていないので、{}で囲む
const timestamp = Date.now(); // This would be the timestamp you want to format

console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
 
type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[]
}
 /*React.FCという型を指定してますが、これは関数コンポーネント（FunctionComponent）のことです。
Reactはこの関数コンポーネントのreturnにHTMLタグ（のようなものを）を書くことでそのまま表示することができます。
これをJSXと呼びますが、TypeScriptなのでTSXです。
*/
const TaskInput: React.FC<Props> = ({ setTasks, tasks }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(tasks.length + 1)
    /*useStateは配列の分割代入で2つの変数に入れます。
一つ目の変数（count）はステートを表示する変数です。
二つ目の変数（setCount）はステートの値を更新する為の関数です。
*/
 
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }
 
    const handleSubmit = () => {
        setCount(count + 1)
         
        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false,
            time: Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        }
         
        setTasks([newTask, ...tasks])//...tasksで配列の中身全てを入力、先頭に新規タスクが入る
        setInputTitle('')
 
    }
 
    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        value={inputTitle}//{}で囲んで変数表示
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="btn is-primary">追加</button>
                </div>
            </div>
        </div>
    )
}
 
export default TaskInput