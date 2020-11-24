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

<h1  style={{color: "white", fontSize:"64px"}} className="storehealth">Check your store's health</h1>
<p className="counterfeitsandIPinf" style={{color: "white", fontSize:"27px"}} className="form_header"> Scan your store for counterfeits and IP infringement.   </p>       

<div className="contact_submit2" >
<input className="storeusrl" type="search" style={{height: "50px", width: "480px", fontSize:"25px", align:"center"}} placeholder= "Enter your store url"  />              
<button  style={{height: "50px",width: "150px", color: "white",fontSize:"15px", backgroundColor: "#4169E1" }} >Scan</button>            
</div>    

<div>
  <h1></h1>   
  <h1></h1>  
  <h1></h1>   
</div>  



<div className="Howitzworks">    
<h2 style={{color: "white",fontSize:"29px"}}> How It Works ? </h2>  
</div>  


<table width="55%"  height = "280"  align="center" style={{backgroundColor: '#3047eb' }}  >
<tr>    

<td>       
<div className="card_text">
<img src="/src/viewico.png"  height="55" width="45" />
<p style={{color: "white"}}> Scan <br/> Your store</p>
</div>
</td>

<td>
<div className="card_text">
<img src="./viewico.png"  height="55" width="45" />
<p style={{color: "white"}}>Read Shopify <br/> Guidelines </p>     
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p style={{color: "white"}}>View <br/> Reports </p>
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