import React, { Component } from 'react'
import { connect } from 'react-redux'
import Penalty from "../component/Penalty";
import AddUser from "../component/AddUser";
import UserList from "../component/UserList";

class UserContainer extends Component {

    componentWillMount(){
        if(this.props.name === ''){
            this.props.history.push("/");
        }
    }


    render() {
        console.log(this.props.users);
        return (
          <div>
            <h1> Hello {this.props.name} </h1>
            <hr/><br/>
            
                <Penalty/>

            <br/><hr/><br/>

                <AddUser /> 

            <hr/>
                <h1> Total : {this.props.total} </h1>
                {
                     this.props.users.map((user)=>{
                        return <ul> <UserList userData={user}/> </ul>
                     })
                }
        </div>    
        );
      }
}
const mapStateToProps = (state) => {
    return {
        name: state.name,
        users: state.users,
        total: state.total
    }
}
export default connect(mapStateToProps)(UserContainer);