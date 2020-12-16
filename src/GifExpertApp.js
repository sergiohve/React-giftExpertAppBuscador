import React, {useState} from 'react';
import { AddCategory } from "./components/Addcategory";

import { GifGrid } from "./components/GifGrid";



const GifExpertApp = () =>{
   
    //const categories = ["Naruto", "Dragon", "Punch" ];

    const [categories, setCategories] = useState(["" ]);


 
        
    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
       
        
        <ol>
        {categories.map(category=>
        <GifGrid 
        key={category} 
        category={category}/>
        )}
        </ol>
       
        
       </>
      
    );
}

export default GifExpertApp;