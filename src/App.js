import logo from './logo.svg';
import './App.css';
// import './shopify.html';
// import Viewico from './viewico.png';
// import './Shofihy.js';

function App() {
  return (
    <div className="App" >  
        
        {/* <shopify/> */}
        {/* <Shofihy/> */}


          <div style={{backgroundColor: 'blue' }}> 
           <img src="" align="left" /> 
         <h1 style={{ color: "white",align:"left"} }> BrandCandy </h1>         

         <div className="form_wrapper"  style={{backgroundColor: 'blue' }}>

       <h1  style={{color: "white"}} className="detail_kyc_header">Check Your Store's Health</h1>
      <p  style={{color: "white"}} className="form_header"> Scan your store for counterfeits and IP infringement.   </p>       
     
      <div className="contact_submit" >
      <input type="search" style={{height: "32px",width: "300px" }} placeholder= "ENTER STORE URL"  />              
      <button style={{height: "32px",width: "100px", color: "white", backgroundColor: "purple" }} >SCAN</button>            
      </div>    

     
        
      <div className="card_wrapper">    
      <h2 style={{color: "white"}}> HOW IT'S WORKS? </h2>  
      </div>  
      

      <table width="100%"  height = "370"  style={{backgroundColor: 'blue' }}  >
      <tr>    

        <td> 
       <img src="./scan icon.png" align="center" />
      <div className="card_text">
      <p style={{color: "white"}}> Scan Your store</p>
      </div>
      </td>

      <td>
      <img src="./eidt icon.png" align="center" />
      <div className="card_text">
      <p style={{color: "white"}}>Read Shopify Guidelines </p>     
      </div>
      </td>

      <td>
      <img src= "./viewico.png"  align="center" />
      <div className="card_text">
      <p style={{color: "white"}}>View Reports </p>
      </div>
      </td>      
      </tr>
      
      </table>

       </div>

       </div>

    </div>
  );
}

export default App;
