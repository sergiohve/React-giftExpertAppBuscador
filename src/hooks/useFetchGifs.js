import { useState, useEffect } from 'react'
import { GetGift } from "../helpers/GetGift";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true

    });

    useEffect(() => {
        
            
            GetGift(category)
        .then(imgs=>{ setState({
            data: imgs,
            loading: false
        })})
       

        
        
    }, [category])

    

    return state;//data: [], loading: true
}
