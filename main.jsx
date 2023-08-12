import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import './Home.css'
import { useState } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render (
  <React.StrictMode>
<Main></Main>    

      </React.StrictMode>,
)


function Main() {
  const[count,setCount] = useState(0);
  return (
    <div><header class="header">
    <div class="logo">Start bootstrap</div>
         <nav class="navbar">
     <a href='#'>Home</a>
     <a href='#'>About</a>
     <a href='#'>Shop</a>
    <button class="cartbutton">Cart :<span class="cartcount">{count}</span></button>
    </nav>
   </header>

<div class="cor">
<h1>Shop in style</h1>
<h4>With this shop homepage template</h4>
</div>


<div class="main">
 <Home name="Fancy Product" price="$49-$80" count={count} setCount={setCount}></Home>
 <Home name="Special Item" price="$18" ops="$20" count={count} setCount={setCount}></Home>
 <Home name="Sale Item" price="$25" ops="$58" count={count} setCount={setCount}></Home>
 <Home name="Popular Item" price="$40" count={count} setCount={setCount}></Home>
  <Home name="Sale Item" price="$25" ops="$58" count={count} setCount={setCount}></Home>
  <Home name="Fancy Product" price="$120-$180" count={count} setCount={setCount}></Home>
 <Home name="Special Item" price="$18" ops="$20" count={count} setCount={setCount}></Home>
 <Home name="Popular Item" price="$40" count={count} setCount={setCount}></Home>
 
 </div>

<footer class="foor">
<p>Copyright 0 your Website 2023</p>
</footer></div>
  )
}

export default main