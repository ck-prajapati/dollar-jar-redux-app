import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changePenaltyValue } from '../action/actions'

class Penalty extends Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            penalty: props.penalty 
        };
    }

    handlePenaltyChange = (e) =>{
        if(!isNaN(e.target.value)){
            let penaltyValue = e.target.value;
            this.setState({
                penalty: Number(penaltyValue)
            })
        }
        else{
            alert("Must Enter a Numeric Value for Penalty");
        }
    }

    handleSetPenalty = () =>{
        if(!isNaN(this.state.penalty)){
            this.props.changePenaltyValue(this.state.penalty)

            // sets state back to empty string
            this.setState({
                penalty : Number(this.state.penalty)
            })
        }
        else{
            alert("Must Enter a Penalty");
        }
    }

    render() {
        return (
            <div>
                <fieldset name="Set Penalty ">
                    <label>Enter Penalty : </label>
                    <input
                        type="text"
                        name="penalty" placeholder="Enter Penalty"
                        value={this.state.penalty}
                        onChange = {this.handlePenaltyChange}
                    /> &nbsp;
                    <button type="reset" onClick={this.handleSetPenalty}>Add Penalty</button>
                </fieldset>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        penalty: state.penalty
    }
}

export default connect( mapStateToProps, { changePenaltyValue })(Penalty);