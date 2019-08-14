import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createNewGroupsUser } from '../slices/groupsUserSlice.js'

import '../stylesheets/Phoneframe.css';

class DiseaseSubgroupSelectionScreen extends Component {
  
  state = {
    group_name: '',

    groups_user: {
      group_id: null,
      user_id: this.props.current_user.id
    }

  }

  handleChange = (e) => {
    this.setState({group_name: e.target.value})
  }

  handleOnClick = (e) => {
    //submit selected group to groups_users table to create new groupsUser, then send the new groupsUser to store
    fetch("http://localhost:3000/groups_users",{ 
        method: "post",
        headers: {
          "Content-Type":"application/json",
          "Accepts":"application/json"},
        body: JSON.stringify(this.state.groups_user)
      })
    .then(res => res.json())
    .then(data => {
      //dispatch new groups_user information to store
      this.props.createNewGroupsUser({ groups_user: data.groups_user })
    })
  };
  
  render() { 
    return ( 
      <div className="iphone-container">
        <div className="iphone">
          
          <div className="top-bar">
            <div className="speaker"></div> 
            <div className="camera"></div> 
            <div className="camera-2"></div> 
          </div>
          
          <div className="screen">
            <div className="top-menu">
              <h2>Disease Group Selection</h2>
            </div>
            <div>
              <h6>Here are some relevant groups you might be interested in:</h6>
              <h4>Disease sub-group:</h4>
              <button onClick={this.handleOnClick}  > +    Stage I/II lung cancer </button>
              
              <button onClick={this.handleOnClick}> +     Stage III lung cancer  </button>
             
              <button onClick={this.handleOnClick}> +      Stage IV lung cancer    </button>
           
            </div>

            
          </div>

          <div className="button">      
          </div>

        </div>

      </div>
     );
  }
}
 

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  }
}

const mapDispatchToProps = {
  createNewGroupsUser: createNewGroupsUser
}

export default connect(mapStateToProps, mapDispatchToProps)(DiseaseSubgroupSelectionScreen)
