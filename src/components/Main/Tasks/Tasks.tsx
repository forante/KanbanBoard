import {FC} from 'react'
import { Task } from './Task';


interface IIssues {
  id: number;
  name: string;
  description?: string;
}

interface IDataMock {
  title: string;
  issues: IIssues[];
}

interface ITaskList {
  data: IDataMock[];
}


 const Tasks: FC<ITaskList> = ({data}) => {
  return (
    <>
      {data.map(item=><Task taskItem = {item.issues[0].name}/>)}
    </>
  )
}

export default Tasks;
