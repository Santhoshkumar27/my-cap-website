import React from "react"

export default function Contact(props){
        return(
            <div>
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
               
            </div>
           
            </div>

             

    )
}