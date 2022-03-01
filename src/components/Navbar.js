import React from "react"


export default function Navbar(){

    function handleClick(){
        console.log("I was clicked")
      }
      function handleOnMouseOver(){
        console.log("mouse over")
      }
    return(
        <nav>
            <img src="https://img1.wsimg.com/isteam/ip/2d0f4694-55c7-4b13-8d3f-60d636bf956a/WhatsApp%20Image%202022-01-07%20at%2010.32.37%20AM.png/:/rs=w:200,h:200,cg:true,m/cr=w:200,h:200/qt=q:95" className="nav--logo"
            />
            <img src="https://www.freeiconspng.com/thumbs/menu-icon/menu-icon-18.png" onClick={handleClick} onMouseOver={handleOnMouseOver} className="nav--Menu"/>
            <h1></h1>
        </nav>
    )
}