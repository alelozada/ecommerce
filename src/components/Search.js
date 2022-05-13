import { useState } from "react";

const Search = ({ handlerSearch }) => {
  const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <input type='text' onChange={(e) => {
                setInputValue(e.target.value)
            } } />            
            <button onClick={() => handlerSearch(inputValue)}>Buscar</button>
            
        </div>
    )
}

export default Search;