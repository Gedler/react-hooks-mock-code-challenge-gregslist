import React, {useState} from "react";

function Search({takeSearchInput}) {
  const [searchvalue, setSearchValue] = useState("")
  console.log(searchvalue)
  
  function handleSubmit(e) { //you want to take the input and compare if something matches it. 
    e.preventDefault();
    takeSearchInput(searchvalue);
    console.log(searchvalue)

    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchvalue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
