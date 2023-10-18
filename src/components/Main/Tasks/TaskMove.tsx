import { FC } from 'react'
import styles from './Tasks.module.css'
import classNames from 'classnames'
import { ITaskMoveProps } from './interfaces/interfaces'
import TasksPopup from './TasksPopup'


export const TaskMove: FC<ITaskMoveProps> = ({data, setDataArr, cat, nextCat, addBtn, setAddBtn}) => {

  const taskMoveHandler = (e: React.MouseEvent<HTMLDivElement>) =>{
    setDataArr(prev => prev.map((item)=> item.issues[0].name === (e.target as HTMLButtonElement).innerHTML ? {...item, title: nextCat} : {...item}) )    
    setAddBtn(false)            
  }

  const closePopup = () =>{
    setAddBtn(false)
  }

  return (
    <div>
      <div onClick={closePopup} className={classNames(styles.task, styles.arrow)}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.415 0.209991L6 4.79499L10.585 0.209991L12 1.62499L6 7.62499L0 1.62499L1.415 0.209991Z" fill="black"/>
            </svg>
      </div>
      <div onClick={(e)=>taskMoveHandler(e)} className={styles.addBlock}>
        <TasksPopup data={data} setDataArr ={setDataArr} cat={cat}/>
      </div>  
    </div>  
  )
}
