import React from 'react';
import

styles from '../cssModules.module.css'

import { Navigate } from "react-router-dom"

export default class Login extends React.Component { 

    constructor(props) { 
        super(props);
        this.state = {
            username: "",
            password: "",
            auth:false,

        }    
    }
    loginFunction(state) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    };
    fetch('http://localhost:5000/', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data) {
                this.setState({ auth: true });
            }
        });
    }

    submit() {
        console.log("start")
        this.loginFunction(this.state)
    }
    render() { 
        return (
            <div className="background container" style={{backgroundColor: "Pink",
                                                        backgroundImage: "url('https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600')",
                                                          height: 608,display:'block',alignItems:"center",
                                                          justifyContent:"center"}}>
                <h1 style={{color:"white",fontFamily:'cursive'}}>Salary Management System </h1>
               
    
                <div style={{backgroundColor:"black",width:"30%",height:300,
                            borderRadius: 15,marginTop:"10%",
                            marginLeft: "35%",display:'flex',alignItems:"center",
                            justifyContent:"center"}}>
                    
                        <form>
                        <input type="text"  placeholder="Username"
                                            autoFocus
                                            style={{padding: "5px", fontWeight:"bold",
                                            fontFamily:'Hanalei Fill',
                                            height: 17, width: "100%",
                                            borderColor: 'black', borderWidth: 2,
                                            borderRadius: 10,  marginBottom: 10,
                                            fontSize: 12,}}
                                            value={this.state.username} onChange={(e) => this.setState({username:e.target.value})} /><br/>
                        <input type="password" placeholder="Password"
                                                style={{padding:"5px",fontFamily:'Hanalei Fill',
                                                fontWeight: "bold",height: 17,
                                                width: "100%", borderColor: 'black',
                                                borderWidth: 2, borderRadius: 10,
                                                marginBottom: 10, fontSize: 12}}
                                                value={this.state.password} onChange={(e) => this.setState({password:e.target.value})} /><br/>
                        <button onClick={this.submit}  style={{backgroundColor: "DeepRed",
                                                                    height: 35, width: "110%",paddingRight:"100px",
                                                                    borderColor: 'black', fontFamily:'Hanalei Fill',
                                                                    borderWidth: 2, borderRadius: 10,fontWeight:"bold",
                                                                    marginBottom: 10, fontSize: 14}}>{"Submit"} </button>
                  
                        </form>
                        </div>
                        </div> 
                
          

        )
      
    }


}
function loginFunction(state) {
    console.log("here")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)
    };
    fetch('http://localhost:5000/', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data) {
                // <Redirect to='/ds'/>
            }
        });
}

