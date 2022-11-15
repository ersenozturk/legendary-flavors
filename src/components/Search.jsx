import React, { useState } from "react";
import { useCustomAppContext } from "../context/AppContext";

const Search = () => {
  const {setSearchTerm ,meals} = useCustomAppContext()

  const [text, setText] = useState("");

  const handleChnge = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text) {
      setSearchTerm(text)
    }
  };
  return (
    <header className="search-container">
      <form action="#" onSubmit={handleSubmit}>
        <input
        value={text}
          type="text"
          className="form-input"
          placeholder="type favorite flavor"
          onChange={handleChnge}
        />
        <button type="submit">Search</button>
        <button type="button" className="btn btn-hipster">
          Surprise me!
        </button>
      </form>
      <span>
      We offer you {meals.length} {meals.length > 1 ? 'flavors' : 'flavor'}
      </span>
    </header>
  );
};

export default Search;
