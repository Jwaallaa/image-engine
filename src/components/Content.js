import React, { useState, useEffect } from "react";
import Card from "./Card";
import Spinner from "./Spinner";
import Navbar from "./Navbar";

function Content() {
  // let Images = [2,3,4,6,7,8,9,0]
  const [images, setImages] = useState([]);  // setEmailList([])
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('technology');
  const[pageno , setPageno] = useState(1)

  
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=38685609-a8ebf33b09139288f0e3c6ee8&q=${term}&page=${pageno}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  let nextpage= ()=>{
    setPageno(pageno+1);
    fetch(`https://pixabay.com/api/?key=38685609-a8ebf33b09139288f0e3c6ee8&q=${term}&page=${pageno}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
  }
  
  let prevpage = ()=>{
    setPageno(pageno-1);
    fetch(`https://pixabay.com/api/?key=38685609-a8ebf33b09139288f0e3c6ee8&q=${term}&page=${pageno}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false);
    })  }



  return ( <>
   <Navbar searchText={(text) => setTerm(text)}/> 
   
   {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }
     { isLoading ?<Spinner/>:
    <div className="container">
      <div className="row">
    {images.map((img)=>{
      return  <div className="col-md-4" >
        <Card key={img.id} img = {img}  />
       
        </div>
    })}
    </div>
    <div className="d-flex justify-content-between mt-3 mb-3">
    <button disabled={pageno <=2}className="rounded" onClick={prevpage}> &larr; Previous</button>
    <button className="rounded" onClick={nextpage} >Next &rarr;</button>
    </div>
    </div>
}
    </>)
    
}

export default Content;