import { AddCard } from './AddCard'
import { TaskMove } from './TaskMove'
import Tasks from './Tasks'
import styles from './Tasks.module.css'
import { IProps } from './interfaces/interfaces'
import { FC, useState } from 'react'


export const Finished: FC<IProps> = ({dataArr, setDataArr}) => {

  const [addBtn, setAddBtn]=useState(false);

  const addCardHandler = () => {
    setAddBtn(true);
  }

  return (
    <div className={styles.block}>
    <h4>Finished</h4>
    <Tasks data={dataArr} setDataArr ={setDataArr} cat = 'finished'/>
    {addBtn && <TaskMove data={dataArr} setDataArr ={setDataArr} addBtn={addBtn} setAddBtn={setAddBtn} cat ='inProgress' nextCat='finished'/>}
    {!addBtn && <AddCard addCard={addCardHandler}/>}
  </div>
  )
}