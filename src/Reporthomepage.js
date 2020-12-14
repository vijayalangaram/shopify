import React, { Component } from "react";
import Shopifyscrppage from './Shopifyscrppage';
import Carbonpagesecond from './Carbonpagesecond';
import Aluminipage from './Aluminipage';
import Embededpopup from './Embededpopup';
import Shopifyscanpagesecon from './Shopifyscanpagesecon';
import Brandcandypaymentpage from './Brandcandypaymentpage';
import Reportpagethanks from './Reportpagethanks';
import Reportpagereportdownload from './Reportpagereportdownload';
import Shopifyscrppagepopup from './Shopifyscrppagepopup';
import ShopifyscrppageBlackicon from './ShopifyscrppageBlackicon';
// import './App.css';


class Reporthomepage extends Component {
   render() {
      return (

         <div className="App" >

            <table className="titilereporthomepage" width="100%" height="190" align="center" style={{ backgroundColor: '#3047EB' }}  >

               <tr>

                  <td>
                     <div className="Reporttitle">
                        <h1 style={{ fontSize: "80px" }} > Report </h1>
                     </div>
                  </td>
                  <td className="ReScan">
                     <div>
                        <h1 style={{ fontSize: "27px" }}> <img src="assets/img/scanmini.png" height="30" width="30" /> ReScan </h1>
                     </div>
                  </td>
                  <td className="Scannewstore">
                     <div>
                        <h1 style={{ fontSize: "27px" }}> <img src="assets/img/storemini.png" height="30" width="30" /> Scan New Store </h1>
                     </div>
                  </td>



               </tr>
            </table>

            <table className="Imagesscanned" width="60%" height="80" border="1" bardercolor="grey" color="grey" align="center" >
               <tr>
                  <td>
                     <div>
                        <h2 className="titileimagessc" align="center">2000+<br /> <span>Images scanned</span> </h2>
                     </div>
                  </td>
                  <td>
                     <div>
                        <h2 className="titileimagessc" align="center">183 <br /> Infringement Found</h2>
                     </div>
                  </td>
                  <td>
                     <div>
                        <button style={{ height: "32px", width: "150px", color: "blue", backgroundColor: "white", borderColor: "blue" }} >Download Report</button>
                     </div>
                  </td>
               </tr>
            </table>

            <div >
               <h1>  </h1>

            </div>

            <table className="filterbrands" height="80" width="15%" bardercolor="red" align="left">
               <tr>
                  <td className="checkboxes">
                     <h5>FILTER BRANDS</h5>
                     <input type="checkbox" /> Adidas <br />
                     <input type="checkbox" /> Carbon38 <br />
                     <input type="checkbox" /> H and M <br />
                     <input type="checkbox" /> Nike  <br />
                     <input type="checkbox" /> Superfly <br />
                     <input type="checkbox" /> Ugmonk <br />
                     <input type="checkbox" /> Uniqlo <br />
                     <input type="checkbox" /> Zara <br /> <br />
                     <h6>SORT BY</h6>
                     <input type="radio" /> Match % <br />
                     <input type="radio" /> Sales Volumn <br />
                  </td>
               </tr>
            </table>

            <table className="yourstoretable" height="80" color="grey" width="45%" bardercolor="white" align="center">
               <tr>
                  <td>
                     <div className="card_text">
                        <img src="assets/img/shoe1.png" />
                        <p style={{ color: "grey", fontSize: "18px" }}>Your Store </p>
                     </div>
                  </td>

                  <td style={{ background: "black" }}>
                     <div className="card_text">
                        <img src="assets/img/shoe1.png" />
                        <p style={{ color: "white", fontSize: "18px" }}>Match Found </p>
                     </div>
                  </td>

                  <td >
                     <div className="card_text">
                        <p style={{ fontSize: "16px" }}> Matched on <br /> <a href=""> <u> Carbon38.com ↗</u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px" }}>99% </p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "50px", width: "131px", color: "white", background: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>
               </tr>
               <br />

               <tr>
                  <td>
                     <div className="card_text">
                        <img src="assets/img/dress1.png" />
                        <p style={{ color: "grey", fontSize: "18px" }}>Your Store </p>
                     </div>
                  </td>

                  <td style={{ background: "black" }}>
                     <div className="card_text">
                        <img src="assets/img/dress1.png" />
                        <p style={{ color: "white", fontSize: "18px" }}>Match Found </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p style={{ fontSize: "16px" }}> Matched on <br /> <a href=""> <u> H & M.com↗</u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px" }}>98% </p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "50px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>


               </tr>    <br />


               <tr>
                  <td>
                     <div className="card_text">
                        <img src="assets/img/shoe3.png" />
                        <p style={{ color: "grey", fontSize: "18px" }}>Your Store </p>
                     </div>
                  </td>

                  <td style={{ background: "black" }}>
                     <div className="card_text">
                        <img src="assets/img/shoe4.png" />
                        <p style={{ color: "white", fontSize: "18px" }}>Match Found </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p style={{ fontSize: "16px" }}> Matched on <br /><a href=""> <u> Nike.com↗</u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px" }}>95% </p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "50px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>


               </tr>    <br />


               <tr>
                  <td>
                     <div className="card_text">
                        <img src="assets/img/dressone.png" />
                        <p style={{ color: "grey", fontSize: "18px" }}>Your Store </p>
                     </div>
                  </td>

                  <td style={{ background: "black" }}>
                     <div className="card_text">
                        <img src="assets/img/dresstw.png" />
                        <p style={{ color: "white", fontSize: "18px" }}>Match Found </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p style={{ fontSize: "16px" }}> Matched on <br /> <a href=""> <u> Uniqlo↗</u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px" }}>85% </p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "50px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>


               </tr>    <br />

               <tr>
                  <td>
                     <div className="card_text">
                        <img src="assets/img/capnon.png" />
                        <p style={{ color: "grey", fontSize: "18px" }}>Your Store </p>
                     </div>
                  </td>

                  <td style={{ background: "black" }}>
                     <div className="card_text">
                        <img src="assets/img/captwoo.png" />
                        <p style={{ color: "white", fontSize: "18px" }}>Match Found </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p style={{ fontSize: "16px" }}> Matched on <br /> <a href=""> <u> Ugmonk↗</u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px" }}>82% </p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "50px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>


               </tr>    <br />


            </table>


            <table className="bottumspaymentdetails" height="80" align="center">
               <tr>
                  <td style={{ background: "#3047EB", width: "90px" }}>
                     <div className="card_text">
                        <img src="assets/img/miniloc.png" />
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p style={{fontSize: "20px" }} >Enter payment details to unlcok   <br /> <b>2000+  images from your store </b> </p>
                     </div>
                  </td>

                  <td className="buttong">
                     <div className="buttong">
                        <button className="unlcoresults" style={{ height: "45px", width: "150px", left: "82px", color: "white", backgroundColor: "#3047EB", borderColor: "blue" }}>Unlock All Results</button>
                     </div>
                  </td>
               </tr>
            </table>


            <table class="paginationbot" height="90" align="center" >
               <tr>
                  <td>
                     <div>
                        <button>PRE</button>
                     </div>
                  </td>

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

                  <td>
                     <div>
                        <button>NXT</button>
                     </div>
                  </td>


               </tr>
            </table>



            <div className="sincewes">
               <p align="center" style={{ fontSize: "21px" }} > <b>Since we're not affiliated with Shopify,If your store still gets <br />shut down you can contact <a href="" >Shopify Support</a> </b> </p>
            </div>


         </div>
      );
   }
}
export default Reporthomepage;