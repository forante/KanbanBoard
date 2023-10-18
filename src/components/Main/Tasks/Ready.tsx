import { AddCard } from './AddCard'
import { TaskMove } from './TaskMove'
import Tasks from './Tasks'
import styles from './Tasks.module.css'
import { IProps } from './interfaces/interfaces'
import { FC, useState } from 'react'


export const Ready: FC<IProps> = ({dataArr, setDataArr}) => {

  const [addBtn, setAddBtn]=useState(false);

  const addCardHandler = () => {
    setAddBtn(true);
  }

  return (
    <div className={styles.block}>
    <h4>Ready</h4>
    <Tasks data={dataArr} setDataArr ={setDataArr} cat = 'ready'/>
    {addBtn && <TaskMove data={dataArr} setDataArr ={setDataArr} addBtn={addBtn} setAddBtn={setAddBtn} cat ='backlog' nextCat='ready'/>}
    {!addBtn && <AddCard addCard={addCardHandler}/>}
  </div>
  )
}


