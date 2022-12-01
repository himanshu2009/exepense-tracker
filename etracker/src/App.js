import React from 'react';
import Expenses from './Components/Expenses/Expenses';


// class App extends Component {

function App(){

  /*
  lets create array of objects beacuse we have to create same component
   which contains same data , array is used to reduce repetation
  */
let expenses=[
  {
    id:'e1',
    title:"School Fee",
  amount :300,
  date:new Date(2022,11,17)
  
  },
  {
    id:'e2',
    title:"house-rent Fee",
  amount :420,
  date:new Date(2022,11,14),
  
  },
  {
    id:'e3',
    title:"mess Fee",
  amount :820,
  date:new Date(2022,11,14),
  
  },
  {
    id:'e4',
    title:"hostel Fee",
  amount :20,
  date:new Date(2022,11,14),
  
  }
 
]

 
    return (
      <Expenses item={expenses}/>
      
      
    ); 
  
}

export default App;
