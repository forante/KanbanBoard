import styles from './Main.module.css'
import { Backlog } from './Tasks/Backlog';

const Main = () => {
  return(
   <main className={styles.main}>
    <Backlog/>
    <Backlog/>
    <Backlog/>
    <Backlog/>
   </main>
  )
 }
 
 export default Main;