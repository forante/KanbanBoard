import {FC} from 'react'
import {TaskPopup} from './TaskPopup'
import { ITaskList } from './interfaces/interfaces';


 const TasksPopup: FC<ITaskList> = ({data, setDataArr, cat}) => {
  return (
    <>
      {data.map(item=>item.title === cat && <TaskPopup taskItem = {item.issues[0].name} taskId = {item.issues[0].id} key={item.issues[0].id}/>)}
    </>
  )
}

export default TasksPopup;