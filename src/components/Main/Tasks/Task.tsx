import { FC } from 'react';
import styles from './Tasks.module.css'
import { IItem } from './interfaces/interfaces';


export const Task: FC<IItem> = ({taskItem, taskId}) => {
  return (
    <div className={styles.task}>{taskItem}</div>
  )
}
