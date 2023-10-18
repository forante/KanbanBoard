export interface IIssues {
    id: number;
    name: string;
    description?: string;
  }
  
  export interface IDataMock {
    title: string;
    issues: IIssues[];
  }
  
  export interface ITaskList {
    data: IDataMock[];
    setDataArr: React.Dispatch<React.SetStateAction<IDataMock[]>>
    cat: string;
  }

  export interface IItem {
    taskItem: string;
    taskId: number;
   }

  export interface IProps {
  dataArr: IDataMock[];
  setDataArr: React.Dispatch<React.SetStateAction<IDataMock[]>>
  }

  export interface ITaskMoveProps {
    data: IDataMock[];
    setDataArr: React.Dispatch<React.SetStateAction<IDataMock[]>>
    cat: string;
    nextCat: string;
    addBtn: boolean;
    setAddBtn: React.Dispatch<React.SetStateAction<boolean>>
  }