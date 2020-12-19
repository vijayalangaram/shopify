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

import './App.css';
import './index.js';
import history from './history';


class Reporthomepage extends Component {
   render() {
      return (

         <div className="App" >

            <table className="titilereporthomepage" width="100%" height="170" align="center" style={{ backgroundColor: '#3047EB' }}  >

               <tr>

                  <td>
                     <div className="Reporttitle">
                        <h1 style={{ fontSize: "75px" }} > Report </h1>
                     </div>
                  </td>
                  <td>
                     <div className="ReScan">
                        <h1 style={{ fontSize: "22px" }}> <img src="assets/img/scanmini.png" height="30" width="30" /> ReScan </h1>
                     </div>
                  </td>
                  <td >
                     <div className="Scannewstore">
                        <h1 style={{ fontSize: "22px" }}> <img src="assets/img/storemini.png" height="30" width="30" /> Scan New Store </h1>
                     </div>
                  </td>

               </tr>
            </table>

            <table className="Imagesscanned" width="65%" height="90" border="1" bardercolor="grey" color="grey" align="center" >
               <tr>

                  <td>
                     <tr>
                        <div>
                           <h2 className="titileimagessc" align="center" > <b> 2000 +</b> </h2>
                        </div>
                     </tr>
                     <tr>
                        <div>
                           <h2 className="imagescs" align="center"> <b> Images scanned </b> </h2>
                        </div>
                     </tr>
                  </td>

                  <td>
                     <tr>
                        <div>
                           <h2 className="onehuneithree" align="center"> <b> 183 </b></h2>
                        </div>
                     </tr>
                     <tr>
                        <div>
                           <h2 className="infigfound" align="center"><b>  Infringement Found</b></h2>
                        </div>
                     </tr>
                  </td>


                  <td>
                     <div>
                        <button style={{ height: "34px", width: "160px", color: "blue", backgroundColor: "white", borderColor: "blue" }} >Download Report</button>
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
                     <h5><b>FILTER BRANDS</b></h5>
                     <input type="checkbox" checked /> Adidas <br />
                     <input type="checkbox" checked /> Carbon38 <br />
                     <input type="checkbox" /> H and M <br />
                     <input type="checkbox" checked /> Nike  <br />
                     <input type="checkbox" /> Superfly <br />
                     <input type="checkbox" checked /> Ugmonk <br />
                     <input type="checkbox" /> Uniqlo <br />
                     <input type="checkbox" checked /> Zara <br /> <br />
                     <h6><b>SORT BY</b></h6>
                     <input type="radio" checked /> Match % <br />
                     <input type="radio" /> Sales Volumn <br />
                  </td>
               </tr>
            </table>

            <table className="yourstoretable" height="50%" color="grey" width="50%" bardercolor="white" align="center">
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
                        <p style={{ fontSize: "16px", fontStyle: "bold" }}> <b> Matched on  <img src="assets/img/miniquestionmark.png" /></b> <br /> <a href=""> <u><b> Carbon38.com ↗</b></u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px", fontStyle: "bold" }}><b>99%</b></p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "42px", width: "131px", color: "white", background: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>
               </tr>


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
                        <p style={{ fontSize: "16px" }}> <b>Matched on  <img src="assets/img/miniquestionmark.png" /></b> <br /> <a href=""> <u><b> H & M.com↗</b> </u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px", fontStyle: "bold" }}><b>98%</b></p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "42px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>
               </tr>


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
                        <p style={{ fontSize: "16px" }}> <b>Matched on  <img src="assets/img/miniquestionmark.png" /></b> <br /><a href=""> <u><b> Nike.com↗</b></u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px", fontStyle: "bold" }}><b>95%</b></p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "42px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>


               </tr>
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
                        <p style={{ fontSize: "16px" }}> <b>Matched on  <img src="assets/img/miniquestionmark.png" /></b> <br /> <a href=""> <u><b> Uniqlo.com↗</b></u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px" }}><b>85%</b></p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "42px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>


               </tr>
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
                        <p style={{ fontSize: "16px" }}> <b>Matched on  <img src="assets/img/miniquestionmark.png" /></b> <br /> <a href=""> <u> <b>Ugmonk.com↗</b></u> </a> </p>
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p className="ninperce" style={{ color: "red", fontSize: "18px" }}><b>82%</b></p>
                     </div>
                  </td>

                  <td>
                     <div>
                        <button align="center" style={{ height: "42px", width: "131px", color: "black", fontSize: "16px" }}>View Product</button>
                     </div>
                  </td>


               </tr>

            </table>


            <table className="bottumspaymentdetails" height="80" align="center">
               <tr>
                  <td style={{ background: "#3047EB", width: "120px" }}>
                     <div className="card_text">
                        <img src="assets/img/miniloc.png" />
                     </div>
                  </td>

                  <td>
                     <div className="card_text">
                        <p style={{ fontSize: "20px" }} >  Enter payment details to unlcok   <br /> <b>2000+  images from your store </b> </p>
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
               <p align="center" style={{ fontSize: "17px" }} > <b>Since we're not affiliated with Shopify,If your store still gets <br />shut down you can contact <a href="" >Shopify Support</a> </b> </p>
            </div>

         </div>
      );
   }
}
export default Reporthomepage;