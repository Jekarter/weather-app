import React from 'react'
import Button from 'utils/Button/Button'
import styles from './Search.module.scss'

interface SearchProps {
  hasError: boolean,
  onSubmit: (text: string) => void,
}

type FormFields = {
  cityname: HTMLInputElement,
}

const Search = ({ hasError, onSubmit }: SearchProps) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault()

    const text = event.currentTarget.cityname.value;
    onSubmit(text)
/*     if (text.trim()) {
      
      event.currentTarget.reset();
    } */
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>

        </label>
        <input 
          type="text"
          id="search"
          className={styles.textField}
          name="cityname"
          placeholder='Введите ваш город'
        />
        {hasError && (
          <div className={styles.error}> No result </div>
        )}
        <Button>Search</Button>
      </div>
    </form>
  )
}

export default Search