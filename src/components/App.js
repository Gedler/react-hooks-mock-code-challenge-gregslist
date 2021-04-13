import React, {useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [itemArray, setItemArray] = useState([])
  const [newSearch, setNewSearch] = useState([])
  
  function receiveFilterAfterDelete(newFilterAfterDelete) {
    setItemArray(newFilterAfterDelete)
  }

  function takeSearchInput(inputvalue) {
    setNewSearch(inputvalue)
  }
  
    let searchFilter = itemArray.filter(function(originialArray){
     return originialArray.description.toLowerCase().includes(newSearch)
   
    })
   


  return (
    <div className="app">
      <Header 
      takeSearchInput = {takeSearchInput}
      />
      <ListingsContainer 
      receiveFilterAfterDelete = {receiveFilterAfterDelete}
      
      />
    </div>
  );
}

export default App;
