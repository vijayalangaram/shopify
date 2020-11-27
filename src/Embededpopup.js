import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';
// import viewico from './viewico.png';

class Embededpopup extends Component {
  render() {
  return (        

    <div>  

<table width="60%"  height = "40"  align="center" color="white"  border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
<div>
<p  className="EmbeddedApp" style={{color: "black", align:"left",fontSize:"38px"  }}>You are about to install Embedded App </p>
<img src="./viewico.png" className="imgmargin" height="85" width="75" />
{/* <p style={{color: "black"}}>My Shop </p>    */}
<img src="./viewico.png"  className="middle" height="85" width="135" />
<img src="./viewico.png"  className="imgmarginsdaf" height="85" width="75" />
{/* <p style={{color: "black"}}>BrandCandy </p>    */}
</div>
</td>  
</tr>
</table>

<div>
  <h1></h1>
  <h1></h1>
</div>

<table width="60%"  height = "40"  align="center" color="white" border="1" style={{backgroundColor: 'white'}}  >
<tr>
<td>
 <h2 align="left" style={{}}>Embedded App will be able to:</h2>
 <h2 align="left" style={{}}>View Shopify account data</h2> 
</td> 
<td>
 <a href="" placeholder="sdfds">View details</a> 
 </td> 
</tr>
</table>



<table width="60%"  height = "40"  align="center" color="white"  border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
 <h2 align="left" style={{}}>Manage orders </h2> 
</td>  
<td>
 <a href="" placeholder="sdfds">View details</a> 
 </td> 
</tr>
</table>


<table width="60%"  height = "40"  align="center" color="white"   border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
 <p>To erase your customers' personal information from Embedded App, uninstall the app. After 48 hours,<br/> a request will be sent to Embedded App to erase this data. Learn more about data privacy.</p>
</td>  
</tr>
</table>



<table width="60%"  height = "55"  align="center" color="white"   border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
<button style={{height: "32px",width: "100px", color: "black", backgroundColor: "white" }} >CANCEL</button>            
</td>
<td>
<button style={{height: "32px",width: "100px", color: "black", backgroundColor: "white" }} >Install BrandCandy </button>            
</td>
</tr>
</table>

<div>
  <p>By proceeding, you are agreeing to the <a href="" >Shopify App Store Terms and Conditions.</a> </p>
</div>





</div>

);
}
}

export default Embededpopup;