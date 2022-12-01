import  './Expenses.css';
import ExpenseItem from './ExpenseItem';
import React from 'react';
 

function Expenses(props)
{
    return (
        <div className="expenses">

        <ExpenseItem // is component ke under data pass kiya hai

            date={props.item[0].date}
                  //date="food"
            title={props.item[0].title}
            amount={props.item[0].amount}/>
       <ExpenseItem /* is component ke under data pass kiya hai*/
            date={props.item[1].date}
            //date="food"
            title={props.item[1].title}
            amount={props.item[1].amount}/>
            <ExpenseItem
                date={props.item[2].date}

                 title={props.item[2].title}
                amount={props.item[2].amount}/>
            <ExpenseItem
                date={props.item[3].date}

                title={props.item[3].title}
                amount={props.item[3].amount}/>
            
            </div>
      
      
    ); 




    
}
export default Expenses ;




