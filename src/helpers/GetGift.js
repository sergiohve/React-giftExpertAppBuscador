export  const GetGift= async ( category )=>{
    const url= `https://api.giphy.com/v1/gifs/search?q=${  encodeURI(category) }&api_key=V2D6slEQUcApfQE6omKvJOJlgMzbKfAg`

    const resp = await fetch(url);
    const {data}= await resp.json();
    
    const gift= data.map(img=>{
        return{
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url  
        }  
    })
    return gift;
}
