import React, { Component } from "react";
import './App.css';
import './index.js';
import history from './history';
import Reporthomepage from './Reporthomepage'; 


class Shopifyscanpagesecon extends Component {
  render() {
  return (        

    <div className="asdsadApp" >  

<div style={{backgroundColor: '#3047eb',height: '900px' }}>   

<div className= "BrandCandy">
  <br/>
<h1 style={{ color: "white",align:"left",fontSize:"44px"} }>  <img src="assets/img/fingerlogo.png" /> BrandCandy </h1>         
</div>

<div className="form_wrapper"  style={{backgroundColor: '#3047eb' }}>

<h1 className="checkstorehealth" style={{color: "white", fontSize:"78px"}} >Check your store's health</h1>
<p className="counterfeitsandIPinf" style={{color: "white", fontSize:"29px"}} className="form_header"> Scan your store for counterfeits and IP infringement.   </p>       


<div className="contact_submit2" >
<input className="storeusrl" type="search" style={{height: "63px", width: "500px", fontSize:"25px", align:"center"}} placeholder= "" />              
{/* <button onclick="window.location.href='./Embededpopup.js'" className="Scanbutton" style={{ height: "60px", width: "170px", color: "white", fontSize: "34px", backgroundColor: "black" }} ></button> */}
<img onClick= {() => history.push('/Reporthomepage')}  className="imgscannpopop" src="assets/img/whitescanpopup.png" style={{ height: "60px", width: "170px",}}/>
</div>    

<div>
  <h1></h1>   
  <h1></h1>  
  <h1></h1>   
</div>  


<table width="55%"  height = "130"  align="center" style={{backgroundColor: '#3047eb' }}  >
<tr> 
<td>       
<div className="SCANNING">
<img src="assets/img/scnaseco.png"  height="99" width="799"/>
<h2 className="SCANNING" style={{color: "white",fontSize:"35px",position: "absolute"}}>SCANNING ...</h2>
</div>
</td>     
</tr>
</table>


<table width="53%"  height = "300"  align="center" style={{backgroundColor: 'white' }}  > 
<tr> 
<td>       
<div className="card_text">
<h2 className="BrandCandychecks">What BrandCandy checks </h2>
<h2 className="wearenotaff" style={{color: "black",fontSize:"16px"}}> We are not affiliated with Shopify and cannot 100% guarantee against store shut downs.</h2>
</div>
</td>
</tr>

<tr>
<td>       
<div className="card_text">
 <p className="Intellectual"><img src="assets/img/multi.png" />      Intellectual property infringement</p>
<p className="youmaynot" style={{color: "black",fontSize:"16px"}}> You may not offer goods or services, or post or upload Materials, that infringe on the <br/> copyright or trademarks of others. Eg: Using Marvel logos on your product photos.</p>
</div>
</td>
</tr>
<a href=""  style={{color: '#3047EB'}} >Read official terms on Shopify's website </a>
<h2></h2>
</table>

</div>
</div> 

</div>  

);
  }
}

export default Shopifyscanpagesecon;