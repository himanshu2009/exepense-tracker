import './ExpenseItem.css';
import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
   

const ExpenseItem=(props)=>{// yeha data recive kiya hai aur props ke under aaya hai 
     //var c="car Insurance";
     const[newTitle,setNewTitle]=useState("hii")


       const[title,setTitle]=useState(props.title)
    
     const dabbutton=()=>{
        setTitle(newTitle)
        
       }
       const changeHandler=(event )=>{
        setNewTitle(event.target.value); 
          
       }
       
     /*yaha data used kiya hai-->*/
    return(
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                  <h2>{title}</h2> 
                <div className="expense-item__price">${props.amount}</div>
            </div>

            <input type="text"  value={newTitle } onChange={changeHandler} />
            
            <button  onClick={dabbutton}>Change title</button>
            
            </div>
             
    );

}

export default ExpenseItem;