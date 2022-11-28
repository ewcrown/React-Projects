import React from 'react'
import { useState } from 'react'
import './css/App.css'
import List from './components/List'

export const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems)=>{
      return [...oldItems, inputList]
    })

    setInputList('')
  }

  const deleteItem = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,idx)=>{
        return idx !== id;
      })
    })
  }

  return (
    <>
      <div className="container">
        <div className="taskList">
          <h1>Task List</h1>
          <div className='taskListInp'>
            <input type="text" placeholder='Add Your Task Here.....'  value={inputList} onChange={itemEvent} />
            <button onClick={listOfItems} className='addBtn'>+</button>
          </div>
          <ul className='List'>
            {/* <li>
                <div className='removeItem'><span>+</span></div>
                <div className='listText'>{inputList}</div>
              </li> */}
            {
              items.map((item,idx) => {
                return <List 
                id={idx}
                key={idx}
                text={item} 
                onSelect={deleteItem}
                />
              })
            }
          </ul>
        </div>
      </div>
    </>
  )
}
export default App;
