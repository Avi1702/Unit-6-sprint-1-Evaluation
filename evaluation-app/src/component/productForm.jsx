import React from "react";

function ProductForm(){
 const [title,setTitle]=React.useState("")
 const [gender,setGender]=React.useState("")
 const [price,setPrice]=React.useState("")
 const [category,setCategory]=React.useState("")
 const [image,setImage]=React.useState("")


// function saveData(){

// const payload={
//     title:title,
//     price:price,
//     category:category,
//     gender:gender,
//     image:image
// }

//     fetch(`http://localhost:3000/productData`,{
//         method:"POST",
//         body: JSON.stringify(payload),
//         headers: {
//           "content-type":"application/json"
//         }


//     })
//     .then((res)=>res.json())
//     .then((res)=console.log(res))
//     .catch((err)=>console.log(err))
// };

  

    return(
    <>
    
<h1>Fill The Deatails In Below Form</h1>
<div id="form">
    <form>
    <lable>Title :</lable>
    <input type={"text"} placeholder={"Name Of Product"} value={title} onChange={(event)=>setTitle(event.target.value)}></input>
    <br/>
    <lable>Gender :</lable>
    <select value={gender} onChange={(event)=>setGender(event.target.value)}>
        <option >Male</option>
        <option>Female</option>
    </select>
    <br/>
    <lable>Price :</lable>
    <input type={"number"} placeholder={"Price"} value={price} onChange={(event)=>setPrice(event.target.value)}></input>
    <br/>
    <lable>Category :</lable>
    <input type={"text"} placeholder={"catergory"} value={category} onChange={(event)=>setCategory(event.target.value)}></input>
    <br/>
    <lable>Image :</lable>
    <input placeholder="Provide Image URL" value={image} onChange={(event)=>setImage(event.target.value)}></input><br/>
    <input type={"submit"} ></input>
    </form>
    
</div>

    </>)

}


export default ProductForm