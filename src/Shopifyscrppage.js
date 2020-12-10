import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';
import viewico from './viewico.png';
import Embededpopup from './Embededpopup';

class Shopifyscrppage extends Component {
  render() {
  return (        

    <div className="asdsadApp" >  

    <div style={{backgroundColor: '#3047eb' }}>   
<div className= "BrandCandy">
<h1 style={{ color: "white",align:"left",fontSize:"44px"} }>  <img src="/images/finger.png"/> BrandCandy </h1>    
{/* <img src="/images/finger.png" height="63px" width="52px" />      */}
</div>


<div className="form_wrapper"  style={{backgroundColor: '#3047eb' }}>

<h1 className="checkstorehealth" style={{color: "white", fontSize:"78px"}} >Check your store's health</h1>
<p className="counterfeitsandIPinf" style={{color: "white", fontSize:"33px",left: "20.87%", right: "20.79%" }}> Scan your store for counterfeits and IP infringement.   </p>       


<div className="contact_submit2" >
<input className="storeusrl" type="search" style={{height: "63px", width: "520px", fontSize:"25px", align:"center"}} placeholder= "    Enter your store url"  />              
<button  onclick="window.location.href='/Embededpopup.js'" className="Scanbutton" style={{height: "63px",width:"180px", color: "white",fontSize:"25px", backgroundColor: "#243cbc" }} >Scan</button>            

<a href="/Embededpopup.js" target="_top" className="Scanbutton" style={{height: "63px",width:"180px", color: "white",fontSize:"25px", backgroundColor: "#243cbc" }} >Visit</a>
{/* <img src="/images/fingre.png" height="60" width="50" /> */}
</div>   


<div className="Howitzworks">    
<h2 style={{color: "white",fontSize:"35px"}}> How It Works ? </h2>  
</div>  


<table width="45%"  height = "240"  align="center" style={{backgroundColor: '#3047eb' }}  >
<tr>    

<td>       
<div className="card_text">
<img src="C:/Users/CLSS-PC037/Desktop/bigfm/sho/shopify/src/images/viewicosjp.jpg" height="60" width="50" />
<p style={{color: "white",fontSize:"22px"}}> Scan <br/> Your store</p>
</div>
</td>

<td>
<div className="card_text">
<img src="src/images/viewicosjp.jpg" height="60" width="50" />
<p style={{color: "white",fontSize:"22px"}}>  Read Shopify <br/> Guidelines </p>     
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