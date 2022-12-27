import React from 'react';
import Popup from 'reactjs-popup';

export default class Dashboard_A extends React.Component { 
    

    render() {
        return (
            <div>
            <div style={{backgroundColor:"Black",
                         height:100,width:"100%",paddingTop:1 }}>
            <h2 style={{color:"white",fontFamily:"cursive"}}>Admin Dashboard</h2>
            </div>
            <div style={{backgroundColor:"whitesmoke",
                          backgroundImage: "url('https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600')",
                         height:508,width:"100%",filter: "blur(4px)",
                        }}>
            </div>
                    <div style={{position:"absolute",top:150,left:200,overflow:"hidden",
                overflowY: "scroll",height:300}}>
                    <table style={{border:"1px solid black",borderCollapse: "collapse",width:"900px",
                                    backgroundColor:"whitesmoke"}}>
                    <tr style={{backgroundColor:"black"}}>
                        <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive"}}>Employee_ID</th>
                        <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive"}}>Employee Name</th>
                        <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive"}}>Designation</th>
                        <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive"}}>Month/Year</th>
                        <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive"}}>Total Salary</th>
                    </tr>
                    <tr>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>123</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>I.Rasool</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>Manager</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>January/2022</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>5000000</td>
                    </tr>
                    <tr>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>123</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>I.Rasool</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>Manager</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>January/2022</td>
                        <td style={{border:"2px solid black",borderCollapse: "collapse"}}>5000000</td>
                    </tr>
                   
                   
                   
                   
                    </table>
                    </div>
                   
                    <Popup trigger ={open => (
                    <button style={{backgroundColor: "black",position:"absolute",top:530,left:150,
                    height: 35,paddingRight:"50px",paddingLeft:'50px',
                    borderColor: 'black', fontFamily:'cursive',color:"white",
                    borderWidth: 2, borderRadius: 10,fontWeight:"bold"}} >Register Employee</button>
                        )} position="top">
                    <div style={{height:230,width:300,backgroundColor:"whitesmoke",borderWidth:20,
                                 borderRadius:10,padding:"20px"}}>
            
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Employee_ID</label><br/>
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Employee Name</label><br/>
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Designation</label><br/>   
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Joining Date</label><br/>
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <button style={{backgroundColor:"gray",fontFamily:"cursive",fontWeight:"bold",
                            borderRadius:5,padding:"4px",width:200,marginTop:15}}>Upgrade</button>   
                    </div>
                </Popup>
                <Popup trigger ={open => (
                    <button style={{backgroundColor: "black",position:"absolute",top:530,left:500,
                    height: 35,paddingRight:"50px",paddingLeft:'50px',
                    borderColor: 'black', fontFamily:'cursive',color:"white",
                    borderWidth: 2, borderRadius: 10,fontWeight:"bold"}} >Attendance Management</button>
                        )} position="top">
                    <div style={{height:200,width:300,backgroundColor:"whitesmoke",borderWidth:20,
                                 borderRadius:10,padding:"20px"}}>
            
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Employee_ID</label><br/>
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Date</label><br/>
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <button style={{backgroundColor:"gray",fontFamily:"cursive",fontWeight:"bold",
                            borderRadius:5,padding:"4px",width:200,marginTop:15}}>Upgrade</button>    
                    </div>
                </Popup>
                <Popup trigger ={open => (
                    <button style={{backgroundColor: "black",position:"absolute",top:530,left:900,
                    height: 35,paddingRight:"50px",paddingLeft:'50px',
                    borderColor: 'black', fontFamily:'cursive',color:"white",
                    borderWidth: 2, borderRadius: 10,fontWeight:"bold"}} >Salary Management</button>
                        )} position="top">
                    <div style={{height:200,width:300,backgroundColor:"whitesmoke",borderWidth:20,
                                 borderRadius:10,padding:"20px"}}>
            
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Employee_ID</label><br/>
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Month/Year</label><br/>
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <label style={{fontFamily:"cursive",fontWeight:"bold"}}>Total Salary</label><br/>   
            <input type="text" style={{fontFamily:"cursive",borderRadius:5}}/><br/>
            <button style={{backgroundColor:"gray",fontFamily:"cursive",fontWeight:"bold",
                            borderRadius:5,padding:"4px",width:200,marginTop:15}}>Upgrade</button>
                    </div>
                </Popup>
        </div>
        

    )
}    






}
