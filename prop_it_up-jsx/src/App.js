import React from 'react';
// import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';


//looping
// const people = [
//   {
//     firstName:"Kobe",
//     lastName:"Bryant",
//     hairColor:"black",
//     age:"41",



//   }


// ]

function App() {
  return (
    <div className="App">
     <PersonCard
      firstName="Kobe"
      lastName="Bryant"
      hairColor="black"
      age={41}

      />

      <PersonCard
        firstName="Michael"
        lastName="Jordan"
        hairColor="black"
        age={57}
      /> 


      {/* /* {people.map((person, i) =>(
        <PersonCard
          key={i}

          {... person}
        
        />


      ))} */ }

      <PersonCard
        firstName="Kevin"
        lastName="Durant"
        hairColor="black"
        age={31}
      
      
      />

      <PersonCard
        firstName="Jayson"
        lastName="Tatum"
        hairColor="black"
        age={22}
      /> 
 
     </div>
   );
 }
 
 export default App;
     
     
     
