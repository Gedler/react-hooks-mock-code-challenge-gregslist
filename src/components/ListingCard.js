import React, {useState} from "react";

function ListingCard({description, location, image, id, takeDeletedItem}) {
  const [isfavorite, setIsFavorite] = useState(true);
  
function handleDeleteButton() {
  console.log(id)
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE"
  })
    .then(res=> res.json()) // no need to call .then, using method:delete & passing the callback is enough
    .then(function(deletedItem){ // deletedItem is just an empty Object that indicates something was deleted. 
      takeDeletedItem(id) //you want to pass the ID so you can use logic to not include that specific ID in the callback.
    })
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isfavorite ? (
          <button onClick={()=> setIsFavorite(!isfavorite)} className="emoji-button favorite active">
            ★
            </button>
        ) : (
          <button onClick={() => setIsFavorite(!isfavorite)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> {location}</span>
        <button onClick = {handleDeleteButton} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
