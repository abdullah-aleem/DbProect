import React from 'react';
import styles from '../cssModules.module.css'

import { Redirect } from "react-router-dom"

export default class Login extends React.Component { 

    constructor(props) { 
        super(props);
        this.state = {
            username: "",
            password: "",

        }  
        

    }
    submit() {
        console.log("start")
        loginFunction(this.state)
    }
    render() { 
        return (
            <div className={styles.startp}>
                <div className={styles.lcard}>
                    <div className={styles.lpic}>
                            hello
                    </div>
                    <div className={styles.lform}>
                       
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
                <Redirect to='/ds'/>
            }
        });
}

