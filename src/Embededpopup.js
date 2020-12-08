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
<h1 className="EmbeddedApp" style={{color: "black", align:"left",fontSize:"32px" }}>You are about to install Embedded App </h1>

<h3 className="myshopico" ><img src="./viewico.png" className="imgmargin" height="85" width="75"/> <br/>My Shop </h3>

{/* <h3 className="middleicon"><img src="./viewico.png" height="85" width="155"/> </h3> */}
{/* <img src="./viewico.png" height="85" width="155"/> */}

<h3 className="brncandico"><img src="./viewico.png" className="imgmargin" height="85" width="75"/> <br/>BrandCandy </h3>

</div>
</td>  
</tr>
</table>

<div>
  <h1></h1>
  <h1></h1>
</div>

<table border="0" width="60%"  height = "40" cellspacing="0" cellpadding="0"   align="center" color="white" border="1" style={{backgroundColor: 'white'}}  >
<tr>
 <h2 className="Embeddedapp" align="left" style={{}}>Embedded App will be able to:</h2>
 <h2 className="Embeddedapp" align="left" style={{}}>View Shopify account data</h2> 
 <a className="viewdetaih" href="" placeholder="sdfds" >View details</a> 
</tr>
</table>



<table border="0" width="60%" cellspacing="0" cellpadding="0"  height = "40"  align="center" color="white"  border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
 <h2 className="Embeddedapp"  align="left" style={{}}>Manage orders </h2> 
 <a className="viewdetaih" href=""  placeholder="sdfds">View details</a> 
 </td> 
</tr>
</table>


<table width="60%"  height = "40"  align="center" color="white"   border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
 <h4>To erase your customers' personal information from Embedded App, uninstall the app. After 48<br/> hours, a request will be sent to Embedded App to erase this data.<a href="" >Learn more about data privacy.</a> </h4>
 
</td>  
</tr>
</table>



<table width="60%"  height = "55"  align="center" color="white"   border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
<button style={{height: "32px",width: "100px", color: "black", backgroundColor: "white" }} >CANCEL</button>            
</td>
<td>
<button style={{height: "32px",width: "150px", color: "white", backgroundColor: "blue" }} >Install BrandCandy </button>            
</td>
</tr>
</table>

<div>
  <p>By proceeding, you are agreeing to the <a  href="" >Shopify App Store Terms and Conditions.</a> </p>
</div>





</div>

);
}
}

export default Embededpopup;