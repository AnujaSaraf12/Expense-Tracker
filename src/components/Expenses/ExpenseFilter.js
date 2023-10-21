
import { useState } from 'react';
import './ExpenseFilter.css';
// 1. create a dropdown menu.
// The value property of select holds the value of currently selected option.
//2. Now , i would want a function which will handle the change the click made in order to select the options.
// event.target will hold the element that triggered the event. 

//note : event is onChange . event.target is select . event.target.value is 2020

const ExpenseFilter = (props) =>{




    
  const dropDownChangeHandler = (event) => { 
    props.onChangeFilter(event.target.value)
     
    
    
 }






    return(
<div className='expenses-filter'>
    <div className='expenses-filter__control'>
        <label>filter by year</label>
        <select value = {props.selected} onChange = {dropDownChangeHandler}  >
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
        </select>
    </div>
</div>
    )
     
    }
export default ExpenseFilter;