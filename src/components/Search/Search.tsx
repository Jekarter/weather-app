import Button from 'components/Button/Button'
import React, { useState } from 'react'
import styles from './Search.module.scss'

interface SearchProps {
  onSubmit: (text: string) => void,
  onChangeCheckbox: (isChecked: boolean) => void,
}

type FormFields = {
  cityname: HTMLInputElement,
}

const Search = ({ onSubmit, onChangeCheckbox }: SearchProps) => {
  const [checked, setChecked] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()

    const text = event.currentTarget.cityname.value;
  
    if (text.trim()) {
      onSubmit(text)
      event.currentTarget.reset();
    } 
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked)
    onChangeCheckbox(event.target.checked)
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label} />
        <input 
          type="text"
          id="search"
          className={styles.textField}
          name="cityname"
          placeholder='Введите ваш город'
          onChange={handleChange}
        />
        <Button>Поиск</Button>
      </div>
      <div className={styles.checkboxBlock}>
        <input 
          type="checkbox"
          id="checkbox"
          className={styles.checkbox}
          name="cityhist"
          checked={checked}
          onChange={handleChange}
        />
        <label htmlFor="checkbox" className={styles.label}>Запомнить этот город</label>

      </div>
    </form>
  )
}

export default Search