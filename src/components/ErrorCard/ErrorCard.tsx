import React from 'react'
import styles from './ErrorCard.module.scss'

const ErrorCard = () => {
  return (
    <div className={styles.errorCard}>
      <p className={styles.errorMassage}>Введенный город не найден</p>
    </div>
  )
}

export default ErrorCard