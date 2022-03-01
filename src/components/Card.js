import React from "react";


export default function Card(props){
    


    return(
        <div className="card--div">
         <img src={props.coverImg} className="card--photo"/>
         
          <p className="card--p1" className="bold">{props.title}</p>
          
         </div>

        


        

    )
}