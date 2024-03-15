import { useState } from 'react'
import {cabecera} from './componentes/cabeceras'
import {pie} from './componentes/pie'
import {personas}  from './componentes/personas'
import './App.css'

function App() {
     
    const arrayPersonas = [];
    for (var i = 0; i < personas.length; i++) {
      arrayPersonas.push(
        <div key={i}>
          <p>Nombre: {personas[i].name}</p>
          <p>Apellidos: {personas[i].lastName}</p>
          <p>Hobbies: {personas[i].hobbies.join(', ')}</p>
          <p>Edad: {personas[i].age}</p>
        </div>
      );
    }


  return (
    <>
      <cabecera />
    <div className="envoltura">
      <div className="personas">{arrayPersonas}</div>

      {/* <form>
        <input type="text"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                    placeholder="add a name"></input>
        
        <input type="text"
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                    placeholder="add a name"></input>
      </form>
     */}
      {/* {suma} --> clacula la suma de los dos elementos que hay en los inputs */}
    
   
      
    
    </div>
   
    <pie />
    </>
  )
}

export default App
