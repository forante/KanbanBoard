import { AddCard } from './AddCard'
import  Tasks from './Tasks'
import styles from './Tasks.module.css'
import { TaskInput } from './TaskInput'
import { SubMit } from './SubMit'
import { FC, useState } from 'react'
import { IDataMock, IProps } from './interfaces/interfaces'


export const Backlog: FC<IProps> = ({dataArr, setDataArr}) => {
 
  const [btnState, useBtnState]=useState(false);
  const [value, setValue] = useState('');
  
  
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
  }

  const AddCardHandler = () => {
    useBtnState(true)
  }

  const SubmitHandler = () => {
  
    const currentTask: IDataMock = 
      {
        title: "backlog",
    issues: [
      {
        id: dataArr.length + 1,
        name: value,
        description: "Fix all the bugs",
      },
            ],
      }
    setDataArr([...dataArr, currentTask]);
    useBtnState(false);
    setValue('');
  }

  return (
    <div className={styles.block}>
      <h4>Backlog</h4>
      <Tasks data={dataArr} setDataArr ={setDataArr} cat='backlog'/>
      {btnState && <TaskInput changeHandler= {changeHandler}/>}
      {btnState ? <SubMit submit={SubmitHandler} value={value}/> : <AddCard addCard={AddCardHandler}/>}
    </div>
  )
}
