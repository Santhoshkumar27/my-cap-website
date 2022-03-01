import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "../src/data"
import {Routes,Route} from "react-router-dom";
//import {Switch} from "react"
import Home from "../src/components/Home"
import About from "../src/components/About"
import Service from "../src/components/Service"

 import Contact from "./components/Contact"



export default function App(){
  

  const cards = data.map(item =>{
    return (
      <Card
      key={item.id}
      {...item}
 />

    )
  }) 
return (
   <div>
     <Navbar/>
    
     <Hero/>
    
     <section className="card--list">
      {cards}
      </section>
    
    </div>
)
}


