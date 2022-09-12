import React, { useState } from "react";

function Table({ plates, cash, setCash }) {
  const [cashValue, setCashValue] = useState(0)

  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

    function handleSubmit(e) {
      e.preventDefault()
      setCash(cash + cashValue)
    }

    const handleChange = (e) => {
      setCashValue(parseInt(e.nativeEvent.target.value))
    }

  return (
    <>
      <h1 className="remaining">
        You have: ${cash} remaining!
      </h1>
      <form 
        className="remainings" 
        onSubmit={(e) => handleSubmit(e)}
      >
        <input type='text' value={cashValue.toString()} onChange={handleChange}></input>
        <button>Add to Sushi Balance!</button>
      </form>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
