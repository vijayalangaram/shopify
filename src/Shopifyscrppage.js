import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';
import viewico from './viewico.png';

class Shopifyscrppage extends Component {
  render() {
  return (        

    <div className="asdsadApp" >  

    <div style={{backgroundColor: '#3047eb' }}>   
<div className= "BrandCandy">
<h1 style={{ color: "white",align:"left",fontSize:"44px"} }>  <img src="./viewico.png"/> BrandCandy </h1>         
</div>


<div className="form_wrapper"  style={{backgroundColor: '#3047eb' }}>

<h1  style={{color: "white", fontSize:"78px"}} className="storehealth">Check your store's health</h1>
<p className="counterfeitsandIPinf" style={{color: "white", fontSize:"34px"}} className="form_header"> Scan your store for counterfeits and IP infringement.   </p>       

<div className="contact_submit2" >
<input className="storeusrl" type="search" style={{height: "63px", width: "600px", fontSize:"25px", align:"center"}} placeholder= "    Enter your store url"  />              
<button  style={{height: "63px",width: "150px", color: "white",fontSize:"25px", backgroundColor: "#252c8f" }} >Scan</button>            
</div>   


<div className="Howitzworks">    
<h2 style={{color: "white",fontSize:"35px"}}> How It Works ? </h2>  
</div>  


<table width="45%"  height = "240"  align="center" style={{backgroundColor: '#3047eb' }}  >
<tr>    

<td>       
<div className="card_text">
<img src="/src/viewico.png" height="60" width="50" />
<p style={{color: "white",fontSize:"22px"}}> Scan <br/> Your store</p>
</div>
</td>

<td>
<div className="card_text">
<img src="./viewico.png" height="60" width="50" />
<p style={{color: "white",fontSize:"22px"}}>Read Shopify <br/> Guidelines </p>     
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png" height="60" width="50"/>
<p style={{color: "white",fontSize:"22px"}}>View <br/> Reports </p>
</div>
</td>      
</tr>

</table>
</div>
</div> 

</div>  

);
  }
}

export default Shopifyscrppage;