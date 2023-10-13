import { FC } from 'react';
import styles from './Tasks.module.css'
import classNames from 'classnames'

interface ISubmit {
  submit: ()=>void;
}

export const SubMit:FC<ISubmit> = ({submit}) => {
  return (
    <button onClick={submit} className={classNames(styles.btn, styles.submit)}>Submit</button>
  )
}
