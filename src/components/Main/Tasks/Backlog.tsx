import { AddCard } from './AddCard'
import  Tasks  from './Tasks'
import styles from './Tasks.module.css'
import { dataMock } from './Data'
import { TaskInput } from './TaskInput'
import { SubMit } from './SubMit'
import { FC, useState } from 'react'


export const Backlog: FC = () => {

  const [dataArr, setDataArr] = useState(dataMock);
  const [btnState, useBtnState]=useState(false);
  const [value, setValue] = useState('');
  
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }

  const AddCardHandler = () => {
    useBtnState(true)
  }

  const submitHandler = () => {
    const currentTask = [
      {
        title: "backlog",
    issues: [
      {
        id: dataArr.length,
        name: value,
        description: "Fix all the bugs",
      },
    ],

    }]
    setDataArr(currentTask);
  }

  return (
    <div className={styles.block}>
      <h4>Backlog</h4>
      <Tasks data={dataArr}/>
      {btnState && <TaskInput changeHandler= {changeHandler}/>}
      {btnState ? <SubMit submit={submitHandler}/> : <AddCard addCard={AddCardHandler}/>}
    </div>
  )
}
