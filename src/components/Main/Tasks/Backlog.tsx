import { AddCard } from './AddCard'
import  Tasks  from './Tasks'
import styles from './Tasks.module.css'
import { dataMock } from './Data'


export const Backlog = () => {
  return (
    <div className={styles.block}>
      <h4>Backlog</h4>
      <Tasks data={dataMock}/>
      <AddCard/>
    </div>
  )
}
