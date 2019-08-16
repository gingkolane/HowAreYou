import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"

class Care extends Component {
  
  screenContent = (
    <>
     <h4>Summary</h4>
       <p> Phasellus isi gravida, elementum dui non, lorem. Utullamcorper neque non sapien vestibulum sollicitudin.</p>
     <h4>Causes</h4>
       <p> Lorem ipsum dolor sit amet um dui non, lorem. Utullamcorper neque n</p>
     <h4>Signs and symptoms</h4>
       <p> Phasellus isi gravida, elementum dui non, lorem. Utullamcorper neque non sapien vestibulum sollicitudin.</p>
    </>
  )

 render() {
   return <PhoneFrame titleText = { "How to care" } 
     screenContent={this.screenContent}/>
  }
  
}

export default Care

