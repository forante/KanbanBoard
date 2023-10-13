import { FC } from 'react';
import styles from './Tasks.module.css'

interface IItem {
 taskItem: string;
}

export const Task: FC<IItem> = ({taskItem}) => {
  return (
    <div className={styles.task}>{taskItem}</div>
  )
}
