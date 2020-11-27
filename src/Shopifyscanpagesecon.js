import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';
import viewico from './viewico.png';

class Shopifyscanpagesecon extends Component {
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
<input className="storeusrl" type="search" style={{height: "45px", width: "480px", fontSize:"25px", align:"center"}} placeholder= "Enter your store url"  />              
{/* <button  style={{height: "50px",width: "150px", color: "white",fontSize:"15px", backgroundColor: "#4169E1" }} ></button>             */}
<img src="/src/viewico.png"  height="55" width="150"/>
</div>    

<div>
  <h1></h1>   
  <h1></h1>  
  <h1></h1>   
</div>  


<table width="55%"  height = "130"  align="center" style={{backgroundColor: '#3047eb' }}  >
<tr> 
<td>       
<div className="card_text">
<img src="/src/viewico.png"  height="55" width="599"/>
<p style={{color: "white"}}> Scanning</p>
</div>
</td>     
</tr>
</table>


<table width="55%"  height = "280"  align="center" style={{backgroundColor: 'white' }}  >
 
<tr> 
<td>       
<div className="card_text">
  <h1>What BrandCandy checks </h1>
<p style={{color: "black"}}> We are not affiliated with Shopify and cannot 100% guarantee against store shut downs.</p>
</div>
</td>
</tr>

<tr>
<td>       
<div className="card_text">
  <h2>Intellectual property infringement</h2>
<p style={{color: "black"}}> You may not offer goods or services, or post or upload Materials, that infringe on the <br/> copyright or trademarks of others. Eg: Using Marvel logos on your product photos.</p>
</div>
</td>
</tr>

<a href="" >Read official terms on Shopify's website </a>

</table>




</div>
</div> 

</div>  

);
  }
}

export default Shopifyscanpagesecon;