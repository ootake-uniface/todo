import React, { useState } from 'react'
import { Task } from './Types'
import { Thema } from './Types'
//Typesがexport defaultを持っていないので、{}で囲む

 //データの入った “props”（「プロパティ」の意味）というオブジェクトを引数として受け取り、React 要素を返す
type Props = {
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
    tasks: Task[],
    thema: Thema
    setThema: React.Dispatch<React.SetStateAction<Thema>>
}

 /*React.FCという型を指定してますが、これは関数コンポーネント（FunctionComponent）のことです。
Reactはこの関数コンポーネントのreturnにHTMLタグ（のようなものを）を書くことでそのまま表示することができます。
これをJSXと呼びますが、TypeScriptなのでTSXです。
*/
const TaskInput: React.FC<Props> = ({ setTasks, tasks ,thema,setThema }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(tasks.length + 1)
    /*useStateは配列の分割代入で2つの変数に入れます。
一つ目の変数（count）はステートを表示する変数です。
二つ目の変数（setCount）はステートの値を更新する為の関数です。
*/
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }
 
    //入力を元にTaskを登録
    const handleSubmit = () => {
        setCount(count + 1)//countは、tasks.lengthを初期化時に1度だけ受け取り、あとは数値が増えていく
        const timestamp = Date.now(); // This would be the timestamp you want to format
        const newTask: Task = {
            id: count,
            title: inputTitle,
            done: false,
            time: Intl.DateTimeFormat('ja-JP-u-ca-japanese', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
        }
         
        setTasks([newTask, ...tasks])//先頭に新規タスクが入り、...tasksで配列の中身全てを入力
        setInputTitle('')
 
    }
    const handleThema=() =>{
        setThema(!thema)
    }
 
    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        value={inputTitle}//{}で囲んで変数表示
                        onChange={handleInputChange}//inputTitleを更新しないと初期値として与えられた''から更新されない
                    />
                    <button onClick={handleSubmit} className="btn is-primary">追加</button>
                    <p>テーマ{thema ? "lightに" : "darkに"}</p>
                    <div className="toggle-switch">
                        <input id="toggle" className="toggle-input" type='checkbox' onChange={handleThema}/>
                        <label htmlFor="toggle" className="toggle-label"/>
                    </div> 
                </div>
            </div>
        </div>
    )
}
 
export default TaskInput