import React from "react";
import Search from "./Search";

function Header({takeSearchInput}) {
  
 
       
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      takeSearchInput = {takeSearchInput}
      />
    </header>
  );
}

export default Header;
