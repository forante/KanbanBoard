import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <p>Active tasks:N</p>
        <p>Finished tasks:M</p>
      </div>
      <div>
        <p>Kanban board by NAME, YEAR</p>
      </div>
    </div>
  )
}
