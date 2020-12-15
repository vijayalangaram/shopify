import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';
import viewico from './viewico.png';
import Embededpopup from './Embededpopup';

class Shopifyscrppagepopup extends Component {
  render() {
  return (        

    <div className="asdsadApp" >  

    <div className="popupscsa" style={{backgroundColor: '#3047eb',height: '1100px' }}>   
    
<div className= "BrandCandy">
  <br/>
  <br/>
  <h1 style={{ color: "white", align: "left", fontSize: "44px" }}>  <img src="assets/img/fingerlogo.png" /> BrandCandy </h1>
<br/>
<br/>
</div>


<table  width="55%"  height = "40"  align="center" color="white"  border="0"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
<div>
<p className="EmbeddedApp" style={{color: "black", align:"left",fontSize:"24px" }}>You are about to install Embedded App </p>

{/* <h3 className="middleicon"><img src="./viewico.png" height="85" width="155"/> </h3> */}
{/* <img src="./viewico.png" height="85" width="155"/> */}

<img src="assets/img/onetoanothersec.png" height="142" width="800"/>

</div>
</td> 
</tr>
<br/>
<br/>
</table>


<table border="0" width="60%"  height = "40" cellspacing="0" cellpadding="0" align="center" color="white"  style={{backgroundColor: 'white'}}  >
<tr>
  <td>
 <p className="Embeddedapp" align="left" style={{}}>Embedded App will be able to:</p>
 <p className="Embeddedapp" align="left" style={{}}>View Shopify account data</p> 
 </td>
 <td>
 <a className="viewdetaih" href="">View details</a> 
 </td>
</tr>
</table>



<table width="60%" cellspacing="0" cellpadding="0"  height = "40"  align="center" color="white"  border="0"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
 <p className="Embeddedapp" align="left" style={{}}>Manage orders </p> 
 </td> 
 <td>
 <a className="viewdetaihsecond" href="" >View details</a> 
 </td> 
</tr>
</table>


<table width="60%"  height = "50"  align="center" color="white"   border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
  <br/>
 <p className="toerseurcust" style={{ fontSize:"18px"}} >To erase your customers' personal information from Embedded App, uninstall the app. After 48<br/> hours, a request will be sent to Embedded App to erase this data.  <a href="" style={{color: '#0CA4DF'}} >  Learn more about data privacy.</a> </p>
 <br/>
</td>  
</tr>
</table>



<table  width="60%"  height = "55"  align="center" color="white"   border="0"  style={{backgroundColor: 'white'}}  >
<tr>
<td>  
<button style={{height: "40px",width: "120px", color: "black",  fontSize:"15px", backgroundColor: "white" }} >CANCEL</button>            
</td>
<td>
<button className="buttoinstallbrndca" style={{height: "50px",width: "200px", color: "#9ea6b0", backgroundColor: "#3047eb", fontSize:"18px" }} > <blink>Install BrandCandy</blink></button>            
</td>
</tr>
<br/>
<br/>
</table>

<table  width="60%"  height = "40px"  align="center" color="white"   border="0"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
<div>
  <p style={{ fontSize:"19px"}} >By proceeding, you are agreeing to the <a  href="" style={{color: '#0CA4DF'}} >Shopify App Store Terms and Conditions.</a> </p>
</div>
</td>
</tr>
</table>


</div> 
</div>  

);
  }
}

export default Shopifyscrppagepopup;