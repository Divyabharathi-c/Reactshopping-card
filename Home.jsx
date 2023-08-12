import React, { Component, useState } from 'react'

function Home(props) {
  const[isClicked, setState] = useState(true);
 let {count , setCount} = props
  const but = () =>{
    // var count=0;
    if(isClicked==true){
      setState(false);
      setCount(count + 1);
    }
    else{
      setState(true);
      setCount(count - 1);
    }
  }


return (
  <>
  <div class="card ">

    <div class="pricecard">
       {/* <img className='row' src="http://dummyimage.com/450x300/deeze6/6c757d.jpg"></img> */}
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwEdULVVo50TIZX-oM8SFKaxOURZQbP-Zjg&usqp=CAU"/> 
      <div class="prodname">
<br></br>
<header>{props.name}</header>
<br></br>
<p><span class="ops">{props.ops}</span>{props.price}</p>
      </div><br></br>

      <button onClick={() => but()}>
        Add to card
      </button>

    </div>
  </div>

  </>
)}

export default Home
