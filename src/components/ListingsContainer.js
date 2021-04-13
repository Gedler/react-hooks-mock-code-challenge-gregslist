import React, {useState, useEffect} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({receiveFilterAfterDelete,}) {
  const [itemArray, setItemArray] = useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(function(entireItemArray){
        console.log(entireItemArray)
        setItemArray([...entireItemArray])
      })
  }, {})

function takeDeletedItem(deletedItem) {
  let newFilterAfterDelete = itemArray.filter(function(originialArray){
      if (originialArray.id === deletedItem) {
        return false; //returning false will cause filter to not include deletedItem. 
      }
      else {
        return true
      }
  })
  setItemArray(newFilterAfterDelete)
  // receiveFilterAfterDelete(newFilterAfterDelete)
}

// let searchFilter = itemArray.filter(function(originialArray){
//   return originialArray.name.toLowerCase().includes(searchterm.toLowerCase)
// })


  const mappedItemArray = itemArray.map(function(eachItem){
    return (
      <ListingCard
      id = {eachItem.id}
      description = {eachItem.description}
      image = {eachItem.image}
      location = {eachItem.location}
      takeDeletedItem = {takeDeletedItem}
/>
    )
  })
  return (
    <main>
      <ul className="cards">
        {mappedItemArray} 
      </ul>
    </main>
  );
}

export default ListingsContainer;
