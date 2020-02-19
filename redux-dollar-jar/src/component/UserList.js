import React, { Component } from 'react'
import { connect } from 'react-redux'
import { calculateTotal } from '../action/actions'

class UserList extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: props.userData.id,
            name: props.userData.name,
            balance: props.userData.balance
        }
        
    }

      addPoints(userBalance){
        
        userBalance += this.props.penalty;
        
        this.props.calculateTotal(this.props.total + this.props.penalty);
        this.setState({
            balance: userBalance
        })
        
    }

    removePoints(userBalance){
        userBalance -= this.props.penalty;

        if(userBalance < 0){
            alert("Negative Not Allowed. After Charge Penalty it Would be" + userBalance);
        }
        else{
            this.props.calculateTotal(this.props.total - this.props.penalty);
            this.setState({
                balance: userBalance
            })
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                
                <li key={this.state.id}> {this.state.name}
                    <h3> Balance : {this.state.balance} </h3>
                    <button type="button" onClick={() => this.addPoints(this.state.balance)}> + </button> &nbsp;&nbsp; <button type="button" onClick={() => this.removePoints(this.state.balance)}> - </button>
                </li>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users,
        penalty: state.penalty,
        total: state.total
    }
}

export default connect(mapStateToProps, {calculateTotal})(UserList);