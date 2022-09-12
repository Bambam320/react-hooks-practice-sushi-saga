import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleSushiEat, cash}) {
  const [sushi4, setSushi4] = useState([0,4])  

  function handleMoreClick (id) {
    setSushi4(sushi4[0] === 96 ? [0,4] : sushi4.map((num) => num+4))
  }

  const listSushi = sushis
  .slice(sushi4[0],sushi4[1])
  .map((sushi) => {
    return (
      <Sushi 
        key={sushi.id}
        id={sushi.id}
        name={sushi.name}
        img={sushi.img_url}
        price={sushi.price}
        eaten={sushi.eaten}
        handleSushiEat={handleSushiEat}
        cash={cash}
      />
    )
  })

  return (
    <div className="belt">
      {listSushi}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
