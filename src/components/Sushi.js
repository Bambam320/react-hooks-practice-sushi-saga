import React from "react";

function Sushi({id, name, img, price, eaten, handleSushiEat, cash}) {
  
  function handleClick () {
    return price > cash ? null : handleSushiEat(id, price)
  } 

  return (!eaten ?
    <div className="sushi" >
      <div className="plate" onClick={handleClick}>
        <img
          src={img}
          alt={name}
          width="100%"
        />
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div> :
    <div className="sushi" >
      <div className="plate">
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
