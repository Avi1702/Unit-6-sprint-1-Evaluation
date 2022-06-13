import React from "react";

function ProductListing(){

 const [page,setPage]=React.useState(1)
   React.useEffect()
   {
fetch(`http://localhost:3000/productData?_page=${page}&_limit=5`)
.then((res)=>res.json())
.then((res)=>{
    res.map((item)=>{
        let main=document.createElement("div")
        let image=document.createElement("img").src=item.image
    let title=document.createElement("div").innerText=item.title
    let price=document.createElement("div").innerText=item.price
    let category=document.createElement("div").innerText=item.category
    let gender=document.createElement("div").innerText=item.gender

    main.append(image,title,price,category,gender)

    document.getElementById("show").append(main)
  
}
    )
}),[]}


    return(
        <>
        <div id={"show"}>
       
        </div>
        <button onClick={()=>setPage(page-1)}>Previous</button>
     <button onClick={()=>setPage(page+1)}>Next</button>
        </>
    )
}

export default ProductListing