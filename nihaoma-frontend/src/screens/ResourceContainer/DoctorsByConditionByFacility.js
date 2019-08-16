import React, { Component } from 'react'
import PhoneFrame from "../../components/Phoneframe"

class DoctorsByConditionByFacility  extends Component {

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
   return <PhoneFrame titleText = { "Doctors by Condition, by facility" } 
     screenContent={this.screenContent}/>
  }

}

export default DoctorsByConditionByFacility

