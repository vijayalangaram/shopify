import React, { Component } from "react";
import './App.css';
import './index.js';
import history from './history';
import Reporthomepage from './Reporthomepage';  
import Shopifyscanpagesecon from './Shopifyscanpagesecon';  


class Shopifyscrppagepopup extends Component {
  render() {
  return (        

    <div className="asdsadApp" >  

    <div className="popupscsa" style={{backgroundColor: '#3047eb',height: '1000px' }}>   
    
<div className= "BrandCandypopup">
  <br/><br/>
  <h1 style={{ color: "#9ea6b0", align: "left", fontSize: "44px" }}>  <img src="assets/img/fingerlogo.png" /> BrandCandy </h1>
</div>


<table className= "tableofpopupbrndcandy"  width="55%"  height = "40"  align="center" color="white"  border="1"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
<div>  
<p className="EmbeddedApp" style={{color: "black", align:"left",fontSize:"22px" }}><b>You are about to install Embedded App </b></p>
<img src="assets/img/onetoanothersec.png" height="142" width="800"/>
</div>
</td> 
</tr>
</table>


<table border="0" width="59.8%"  height = "40" cellspacing="0" cellpadding="0" align="center" color="white"  style={{backgroundColor: 'white'}}  >
<tr>
  <td>
 <p className="Embeddedapp" align="left" style={{fontSize:"22px"}}><b>Embedded App will be able to:</b></p>
 <p className="Embeddedapp" align="left" style={{fontSize:"22px"}}><b>View Shopify account data</b></p> 
 </td>
 <td>
 <a className="viewdetaih" href="">View details</a> 
 </td>
</tr>
</table>


<table width="60%" cellspacing="0" cellpadding="0"  height = "40"  align="center" color="white"  border="0"  style={{backgroundColor: 'white'}}  >
<tr>
<td>
 <p className="Embeddedapp" align="left"  style={{fontSize:"22px"}}><b>Manage orders</b></p> 
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
<br/>  
<button style={{height: "40px",width: "120px", color: "black",  fontSize:"15px", backgroundColor: "white" }} >CANCEL</button>            
</td>
<td>
{/* <button onClick= {() => history.push('/Shopifyscanpagesecon')} className="buttoinstallbrndca" style={{height: "50px",width: "200px", color: "grey", backgroundColor: "#3047eb", fontSize:"18px" }} > Install BrandCandy</button>             */}
<button onClick= {() => {window.location.href='https://clsslabsdev.myshopify.com/password';}}  className="buttoinstallbrndca" style={{height: "50px",width: "200px", color: "grey", backgroundColor: "#3047eb", fontSize:"18px" }} > Install BrandCandy</button>            
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