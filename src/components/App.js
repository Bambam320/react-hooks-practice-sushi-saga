import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [plates, setPlates] = useState([])
  const [cash, setCash] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        let sushisWithEatenKey = data.map((sushi) => {
          return {...sushi, eaten:false}
        })
        setSushis(sushisWithEatenKey)
      })
  }, [])

  function onEatSushi(id, price) {
    let plateCount = plates.length === 0 ? [] : [...plates]
    plateCount.push('eaten')
    setPlates(plateCount)
    let eatenSushi = sushis.find((sushi) => sushi.id === id)
    eatenSushi.eaten = true
    setSushis(sushis.map((sushi) => sushi.id === id ? eatenSushi : sushi))
    setCash(cash - price)
  }
  
  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis}
        handleSushiEat={onEatSushi}
        cash={cash}
      />
      <Table 
        plates={plates}
        cash={cash}
        setCash={setCash}
      />
    </div>
  );
}

export default App;
