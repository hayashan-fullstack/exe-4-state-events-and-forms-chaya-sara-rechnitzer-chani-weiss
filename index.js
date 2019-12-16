import React, { useState } from 'react'
import ReactDOM from "react-dom";

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Chaya Sara ', num: '0548590674' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      num: newNum
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNum('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumChange = (event) => {
    setNewNum(event.target.value)
  }

  const Rows = (props) => {
  return(
  <div>
    <li>{props.name} {props.num}</li>
  </div>)
}
  
  const Print=(props)=>{
    return (props.persons.map(person=>  <Rows key={person.name} name={person.name} num={person.num}/>))
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name:  <br/><input Name={newName} onChange={handleNameChange}/>
          <br/><br/>
          Phone Number:  <br/><input num={newNum} onChange={handleNumChange}/>
        </div>
        <div>
        <br/>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {<Print persons={persons}/>}
      </div>
    </div>
  )
}



ReactDOM.render(<App />, document.getElementById("root") );


