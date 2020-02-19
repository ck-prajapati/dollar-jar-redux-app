import React from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'

function Home(props) {
    console.log(props);
    return (
        <div className="App">
            <br/>
            <h2> Dollar Jar App Using Redux </h2>
            <br/>
            <hr/><br />
            <form>
                <label>Enter Your Name: </label>
                <input type="text" value={props.name} placeholder="Enter Your Name" onChange={props.changeHomeUserName} name="uname"/>
                <br /><br />
                <Link to = {{pathname: '/add-user'}}> 
                    <button type="button">Submit</button>
                </Link>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const  mapDispatchToProps = (dispatch) =>{
    return{
        changeHomeUserName: (e) => {console.log(e); dispatch({
            type:'CHANGE_HOME_USER_NAME',
            text: e.target.value
        })} 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
