import { FC } from 'react';
import styles from './Tasks.module.css'
import classNames from 'classnames'

interface ISubmit {
  submit: ()=>void;
  value: string;
}

export const SubMit:FC<ISubmit> = ({submit, value}) => {
  return (
    <button onClick={()=>{value && submit()}} className={classNames(styles.btn, styles.submit)}>Submit</button>
  )
}
