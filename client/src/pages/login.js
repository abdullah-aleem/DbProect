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
            <div className={styles.startp}>
                <div className={styles.lcard}>
                    <div className={styles.lpic}>
                            hello
                    </div>
                    <div className={styles.lform}>
                        {this.state.auth ? <Navigate to='/ds' />:""}
                            <li>
                                <ul>
                                <input type="email" className={styles.lemail} value={this.state.username} onChange={ (e)=>this.setState({username:e.target.value})} />   

                                </ul>
                                <ul>
                                <input type="password" className={styles.lpswrd} value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />

                            </ul>
                            <ul>
                                <button onClick={()=>this.submit()}>Submit</button>
                            </ul>


                            </li>
                               

                            

                        
                     
                    </div>
               </div>
            </div>
        )
    }


}

