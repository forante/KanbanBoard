import {FC} from 'react'
import { Task } from './Task';
import { ITaskList } from './interfaces/interfaces';


 const Tasks: FC<ITaskList> = ({data, setDataArr, cat}) => {
  return (
    <>
      {data.map(item=>item.title === cat && <Task taskItem = {item.issues[0].name} taskId = {item.issues[0].id} key={item.issues[0].id}/>)}
    </>
  )
}

export default Tasks;


