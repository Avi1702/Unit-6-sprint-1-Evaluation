import React from "react";

function ProductListing(){

 const [page,setPage]=React.useState(1)
//  const [loading,setLoading]=React.useState(false)


 function data(){

// setLoading(true)
  document.getElementById("show").innerHTML=""
    fetch(`http://localhost:3000/productData?_page=${page}&_limit=5`)
    .then((res)=>res.json())
    .then((res)=>{
        // setLoading(false)
        console.log("hello")
    
       res.forEach((item)=> {
        let main=document.createElement("div")
        main.setAttribute("id","subMain")
      let img=document.createElement("div")
       let image=document.createElement("img")
        image.src=item.image
        img.append(image)
    let title=document.createElement("p").innerText=item.title
    let price=document.createElement("p").innerText=item.price
    let category=document.createElement("p").innerText=item.category
    let gender=document.createElement("p").innerText=item.gender
    let btn=document.createElement("button")
    btn.innerText="Delete"
    main.append(image,title,price,category,gender,btn)
    
    document.getElementById("show").append(main)
  
    
       }); 
    //    setLoading(false)
    })
 
 }

React.useEffect(()=>{
data()},[page])



    return(
        <>
        <div id="show">

       
        </div>
        <button onClick={()=>setPage(page-1)}>Previous</button>
      <button onClick={()=>setPage(page+1)}>Next</button>
        </>
    )
}

export default ProductListing