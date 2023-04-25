import Button from 'components/Button/Button'
import React, { useState } from 'react'
import styles from './Search.module.scss'


interface SearchProps {
  onSubmit: (text: string) => void,
  onChangeCheckbox: (isChecked: boolean) => void,
}

export type FormFields = {
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



/* Autocomplte
const urlAutoComplete = 'http://api.weatherapi.com/v1/search.json?key=4f254a5b5c994fceb2174829232204&q=lon'

  const [searchCity, setSearchCity] = useState([])
  const [textSearch, setTextSearch] = useState('')
  const [suggestion, setSaggestion] = useState([])

  
 /*  const autoComplete = (event: React.ChangeEvent<HTMLInputElement & FormFields>): void => {
    const text = event.currentTarget.cityname.value

    const instance = axios.get(urlAutoComplete + text)
  } 


  useEffect(() => {
    const loadCitys = async () => {
      const response = await axios.get(urlAutoComplete)
      console.log(response.data)
      setSearchCity(response.data)
    }
    loadCitys()
  }, [])

  const onSuggestHandler = (textSearch: string) => {
    setTextSearch(textSearch)
  }
  
  const onChangeAutoCompleteHandler = (textSearch: string) => {
    let matches: never[] = []
    console.log(searchCity)
    if (textSearch.length > 3) {
      matches = searchCity.filter((city: string) => {
        const regex = new RegExp(`${textSearch}`, 'gi');
        return city.includes(regex)
      })
    }
    console.log(matches)
    setSaggestion(matches)
    console.log('sugg', suggestion)
    setTextSearch(textSearch)
  }

input           onChange={evt => onChangeAutoCompleteHandler(evt.currentTarget.value)}
          value={textSearch}
*/