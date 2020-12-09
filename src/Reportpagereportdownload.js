import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';

class Reportpagereportdownload extends Component {
     render() {
     return (                   
    <div className="App" >  

<table width="100%"  height = "150%"  align="center" style={{backgroundColor: '#3047EB' }}  >

<tr>
   <td>
 <div className="Reporttitle">
  <h1> Report </h1>      
  </div>       
  </td>


  <td className="ReScan">
 <div>    
  <h1> <img src="" height="30" width="30"/> ReScan </h1>      
  </div>       
  </td>


  <td className="Scannewstore">
 <div>     
  <h1> <img src="" height="30" width="30"/> Scan New Store </h1>      
  </div>       
  </td>

 
 
</tr>  
</table>

<table className="Reportpagereportdownloadtab" width="70%" height = "10" border="1" bardercolor="black" align="center" >
<tr>    
<td>       
<div>
<h2 align="center" color="white">Report is being Downloaded/ emailed to your account </h2> 
</div>
</td>      
</tr>
</table>


<table className="Imagesscanned" width="60%" height = "80" border="1"  bardercolor="black" align="center" >
<tr>    
<td>       
<div>
<h2 align="center">2000+<br/> <span>Images scanned</span> </h2> 
</div>
</td>
<td>
<div>
<h2 align="center">183 <br/> Infringement Found</h2> 
</div>
</td>
<td>
<div> 
<button style={{height: "32px",width: "150px", color: "blue", backgroundColor: "white", borderColor: "blue" }} >Download Report</button>
</div>
</td>      
</tr>
</table>

         <div >
         <h1>  </h1> 
                
         </div>



<table className="filterbrands" height="80" width="15%" bardercolor="red" align="left"> 
<tr>
<td>
   <h3>FILTER BRANDS</h3>   
<input type="checkbox"/>Adidas <br/>
<input type="checkbox"/>Carbon38  <br/>
<input type="checkbox"/>H and M  <br/>
<input type="checkbox"/>Nike  <br/>
<input type="checkbox"/>Superfly  <br/>
<input type="checkbox"/>Ugmonk  <br/>
<input type="checkbox"/>Uniqlo   <br/>
<input type="checkbox"/>Zara   <br/>
<h3>SORT BY</h3> 
<input type="radio"/>MAtch % <br/>
<input type="radio"/>Sales Volumn <br/>
</td> 
</tr>
</table>



<table className="yourstoretable" height="80"  width="40%" bardercolor="white" align="center">
<tr> 
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Carbon38.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>99% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td>  
</tr>

<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found</p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>H&M.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>98% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td>  


</tr>


<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found</p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Nike.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>95% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td>  


</tr>



<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Uniqlo.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>85% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td>  


</tr>

<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Ugmonk.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>83% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td> 
</tr>


<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Ugmonk.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>83% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td> 
</tr>



<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Ugmonk.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>83% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td> 
</tr>



<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Ugmonk.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>83% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td> 
</tr>


<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Ugmonk.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>83% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td> 
</tr>


<tr>    
<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Your Store </p>
</div>
</td>

<td>
<div className="card_text">
<img src="C:\Users\Corona\Desktop\sho\my-new-app\src\pics\viewico.png"  height="55" width="45" />
<p>Match Found </p>
</div>
</td>

<td>
<div className="card_text">
<p>Matched on <br/> <u>Ugmonk.com</u> </p>
</div>
</td>

<td>
<div className="card_text">
<p>83% </p>
</div>
</td>

<td>
   <div> 
<button align="center">View Product</button>
 </div>
</td> 
</tr>

</table>




<table height="80" align="center" >
<tr>  

<td>
   <div> 
<button>1</button>
 </div>
</td> 

<td>
   <div> 
<button>2</button>
 </div>
</td> 


<td>
   <div> 
<button>3</button>
 </div>
</td> 


<td>
   <div> 
<button>4</button>
 </div>
</td> 

<td>
   <div> 
<button>5</button>
 </div>
</td> 


</tr>
</table>



<div>
    <p align="center">Since we're not affiliated with Shopify,If your store still gets <br/>shut down you can contact <a href="" >Shopify Support</a>  </p>
</div> 

</div>  
  );
  }
}

export default Reportpagereportdownload;