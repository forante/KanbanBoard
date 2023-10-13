import { FC } from 'react';
import styles from './Tasks.module.css'

interface IChange {
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    // value: string;
}

export const TaskInput:FC<IChange> = ({changeHandler}) => {


  return (
    <div>
        <input type='text'  onChange={changeHandler} className={styles.input}/>
    </div>
  )
}
