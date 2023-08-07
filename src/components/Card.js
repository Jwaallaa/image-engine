import React from 'react'

const Card=({img})=> {
    const tags = img.tags.split(',');


  return (
    <div className="card mx-3"  >
     <img src={img.webformatURL} className="card-img-top" alt="img" />
     
    
    
   </div>
  )
}
export default Card;