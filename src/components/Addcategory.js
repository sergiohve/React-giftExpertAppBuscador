import React, { useState } from 'react';
import PropTypes from "prop-types";


export const AddCategory = ({setCategories}) => {
  const [inputValue, setinputValue] = useState("");
   
  const onChange = (e) =>{
     setinputValue(e.target.value)

    
  }
  const onclick = (e) =>{
      e.preventDefault();
      if(inputValue.trim().length > 5 ){
        setCategories(cats=>[ inputValue, ...cats])
        setinputValue("");
      }else{
          alert("Mas de 5 letras")
      }
      
  }
    return (
       
        <form onSubmit={onclick}>
        <input 
            type="text"
            value={inputValue}
            onChange={onChange}
         />
        </form>
           
    );
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}