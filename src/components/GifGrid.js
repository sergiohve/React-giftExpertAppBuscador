import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import {GifGridItem} from "./GifGridItem";


export const GifGrid = ({category}) => {

//renombro data por images para que este mas claro
const {data: images, loading} = useFetchGifs( category);

console.log(images)
console.log(loading)


 
        
    return (
        
      <>
      <h3 className="animate__fadeInDownBig">{category}</h3>

      
      {loading && <p className=""></p> }

      <div className="card-grid">
     
           
                {images.map(img=>(
                     
                     <GifGridItem
                     key={img.id}
                      {...img}
                      />
                     
                    
                 ) )}
           
               
           
           </div> 
           
        </>
    )
}
