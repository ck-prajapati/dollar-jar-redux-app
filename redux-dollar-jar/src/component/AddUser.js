import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUserName } from '../action/actions'

class AddUser extends Component {

    constructor(props) {
        // console.log(props)
        super(props);
        this.state = { name: "" };
      }
    
      changeUserName = name => {
        var regex = /^[A-Za-z]+$/;
          if(regex.test(name)){
            this.setState({ name });
          }
          else{
            alert("User Name Contain only Alphbets ");  
          }
      };
    
      handleAddUserName = () => {
        // dispatches actions to add todo
        if(this.state.name.trim() !== '' ){
            this.props.addUserName(this.state.name)

            // sets state back to empty string
            this.setState({ name: '' })
        }
        else{
            alert("Must Enter a User Name ");
        }
      };


    render() {
        return (
            <div>
            <fieldset>
                <label>Enter New Users: </label>
                <input 
                    name="user" placeholder="Enter User Name"
                    onChange={e => this.changeUserName(e.target.value)}
                    value={this.state.name}
                /> &nbsp;&nbsp;
                
                <button onClick={this.handleAddUserName}>
                    Add User
                </button>
            </fieldset>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        users: state.users
    }
}

export default connect(
    mapStateToProps,
    { addUserName }
  )(AddUser);