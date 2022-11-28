import React from'react';
import { useState } from 'react';
import './App.css'

function App() {

  const [position, setPosition] = useState(0);
  
  const MinusItem = () =>{
    if(position !== 0){
      setPosition(position - 1)
    }
  }
  const PlusItem = () =>{
    setPosition(position + 1)
  }

  return (
    <>
  <section className='container'>
    <div className='quantity-selector'>
      <h2>Quantity Selector</h2>
      <button disabled={position === 0} onClick={MinusItem}>-</button>
      <span>{position}</span>
      <button onClick={PlusItem}>+</button>
    </div>
    </section>
    </>
  );
}

export default App;
