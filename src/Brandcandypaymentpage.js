import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';
// import viewico from './viewico.png';

class Brandcandypaymentpage extends Component {
  render() {
  return (        

    <div className="asdsadApp" >  


<table>
<tr>
  <td>
    <h1></h1>
  </td>
</tr>
<tr>
  <td>
    <h1></h1>
  </td>
</tr>
</table>


<table width="50%"  height = "880%"  align="right" style={{backgroundColor: 'white' }}  >
<tr>  
<td> 
<button style={{height: "32px",width: "320px", color: "white", backgroundColor: "black",fontSize:"24px" }} >Pay</button>            
</td>
</tr>


<tr>
<td>
<h3> ------- 或用另一方式支付 -------</h3>
</td>
</tr>




<tr>
<td>
<p>即箱 </p>
<input className="tesarepaymen" type="textarea" width= "242px" height="33px" />
</td>
</tr>



<tr>
<td>
<p>支付方式</p>
<input type="textarea"  placeholder="即箱" rows="10" cols="20"/>
</td>

<td>
<p>支付方式</p>
<input type="textarea"  placeholder="即箱 " rows="10" cols="30"/>
</td>
</tr>


<tr>
<td>
<p>卡信恩 </p>
<input type="textarea" placeholder="1258 259 257" rows="10" cols="20"/>
</td>
<br/>

{/* <td>
<p>还巴口工巧 </p>
<input type="textarea"  placeholder="i还巴口工巧 " rows="10" cols="20"/>
</td>

<td>
<p></p>
<input type="textarea"  placeholder="CVC " rows="10" cols="30"/>
</td> */}
</tr>


<tr>
<td>
<input type="textarea"  placeholder="即箱" rows="10" cols="20"/>
</td>

<td>
<input type="textarea"  placeholder="CVC" rows="10" cols="30"/>
</td>
</tr>


<tr>
<td>
<p>国家或地区 中国 </p>
<input type="textarea"  rows="10" cols="30"/>
</td>
</tr>


<tr>
<td>
<p>牟孙边毓 </p>
<input type="textarea"  rows="10" cols="30"/>
</td>
</tr>



<td> 
<button style={{height: "38px",width: "320px", color: "white", backgroundColor: "black" }} >卡上的性名  $450</button>            
</td>


</table>




<table width="50%"  height = "800%"  align="right" style={{backgroundColor: '#black' }}  >
<tr>  
       

<td>       
<div className="card_text">
{/* <img src="/src/viewico.png"  height="55" width="45" /> */}
<p style={{color: "black",fontSize:"20px" }}> BrandCandy <a href="" style={{background: "orange",fontSize:"11px"}}>TEST MODE</a>  </p>
</div>
</td>
</tr>

<br/>

<tr>
<td>       
<div className="card_text">
{/* <img src="/src/viewico.png"  height="55" width="45" /> */}
<p style={{color: "black",fontSize:"20px" }}> BrandCandy Premium </p>
<h1 style={{color: "black",fontSize:"45px" }}> ¥ 450.00</h1>
</div>
</td>
</tr>
<br/>

       
<div className="card_text">
<img className="brndcanimge" src="/src/viewico.png"  height="355" width="315" />
</div>
</table>
</div>

);
  }
}

export default Brandcandypaymentpage;