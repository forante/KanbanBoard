import styles from './Main.module.css'
import {useState} from 'react'
import { Backlog } from './Tasks/Backlog';
import { dataMock } from './Tasks/Data';
import { IDataMock } from './Tasks/interfaces/interfaces';
import { Ready } from './Tasks/Ready';
import { Inprogress } from './Tasks/InProgress';
import { Finished } from './Tasks/Finished';

const Main = () => {
  
  const [dataArr, setDataArr] = useState<IDataMock[]>(dataMock);
  
  return(
   <main className={styles.main}>
    <Backlog dataArr={dataArr} setDataArr={setDataArr}/>
    <Ready dataArr={dataArr} setDataArr={setDataArr}/>
    <Inprogress dataArr={dataArr} setDataArr={setDataArr}/>
    <Finished dataArr={dataArr} setDataArr={setDataArr}/>
   </main>
  )
 }
 
 export default Main;