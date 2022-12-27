import React from 'react';
import Popup from 'reactjs-popup';


export default class Dashboard_E extends React.Component { 
    

    render() {
        return (
            <div>
                <div style={{backgroundColor:"Black",
                             height:100,width:"100%",paddingTop:1 }}>
                <h2 style={{color:"white",fontFamily:"cursive"}}>Employee Salary Slip</h2>
                </div>
                <div style={{backgroundColor:"whitesmoke",backgroundImage: "url('https://images.pexels.com/photos/6693655/pexels-photo-6693655.jpeg?auto=compress&cs=tinysrgb&w=600')",
                             height:500,width:"100%",display:'flex',alignItems:"center",filter:"blur(4px)",
                             justifyContent:"center",marginBottom:"300" }}>
                   
                </div>
                <div style={{position:"absolute",top:150,left:200,overflow:"hidden",
                overflowY: "scroll",height:300}}>
                        <table style={{border:"1px solid black",borderCollapse: "collapse",width:"900px",
                                    backgroundColor:"whitesmoke"}}>
                        <tr>
                            <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive",backgroundColor:"black"}}>Employee_ID</th>
                            <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive",backgroundColor:"black"}}>Employee Name</th>
                            <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive",backgroundColor:"black"}}>Designation</th>
                            <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive",backgroundColor:"black"}}>Month/Year</th>   
                            <th style={{border:"2px solid black",borderCollapse: "collapse",color:"white",fontFamily:"cursive",backgroundColor:"black"}}>Total Salary</th>
                        </tr>
                        <tr>
                            <td style={{border:"2px solid black",borderCollapse: "collapse"}}>123</td>
                            <td style={{border:"2px solid black",borderCollapse: "collapse"}}>I.Rasool</td>
                            <td style={{border:"2px solid black",borderCollapse: "collapse"}}>Manager</td>
                            <Popup trigger={open =>(
                            <button style={{border:"2px solid black",borderCollapse: "collapse",color:"black",fontFamily:"cursive",backgroundColor:"white"}}>January/2022</button>)}position="top">
                                <div style={{height:230,width:300,backgroundColor:"whitesmoke",borderWidth:20,
                                 borderRadius:10,padding:"20px"}}>
                                    <p>details</p>
                                 </div>
                            </Popup>
                            <td style={{border:"2px solid black",borderCollapse: "collapse"}}>5000000</td>
                        </tr>
                        </table>
                </div>
                <Popup trigger={open =>(
                <button style={{backgroundColor: "black",position:"absolute",top:550,left:550,
                        height: 35,paddingRight:"50px",paddingLeft:'50px',
                        borderColor: 'black', fontFamily:'cursive',color:"white",
                        borderWidth: 2, borderRadius: 10,fontWeight:"bold"}} >Savings</button>
                )}position="top">
                    <div style={{height:30,width:250,backgroundColor:"whitesmoke",borderWidth:20,
                                 borderRadius:10,padding:"20px"}}>
                    <p style={{fontWeight:"bold",fontFamily:"cursive"}}>Your total savings are : </p>
                    </div>
                </Popup>
                
                </div>
            
            

    )
}    






}