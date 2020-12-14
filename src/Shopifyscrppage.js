import React, { Component } from "react";
import Reportpage from './Reportpage';
import './App.css';
import Shopifyscrppagepopup from './Shopifyscrppagepopup';
import { Container, Row, Col } from 'reactstrap';
import { Colxx, Separator } from './components/CustomBootstrap';

class Shopifyscrppage extends Component {
  render() {

    // <Router>
    // <Route exact path="./Shopifyscrppagepopup" component={Shopifyscrppagepopup} />
    // </Router>

    return (

      <div className="asdsadApp" >

        <div style={{ backgroundColor: '#3047eb', height: '880px' }}>
          <Container style={{ width: '95%',maxWidth:'95%' }}>
            <Row>
              <Colxx xxs="6">
                <div className="BrandCandy" >
                <img src="assets/img/fingerlogo.png" width="40" style={{float:'left'}} />
                  <h1 style={{ color: "white", align: "left", fontSize: "44px",paddingLeft:"50px" }}>   BrandCandy </h1>
                </div>
              </Colxx>
              <Colxx xxs="6"></Colxx>
            </Row>
          </Container>


          <div className="form_wrapper" style={{ backgroundColor: '#3047eb' }}>

            <h1 className="checkstorehealth" style={{ color: "white", fontSize: "78px" }} >Check your store's health</h1>
            <p className="counterfeitsandIPinf" style={{ color: "white", fontSize: "30px", left: "20.87%", right: "20.79%" }}> Scan your store for counterfeits and IP infringement.   </p>

            {/* <Link to="./Shopifyscrppagepopup" className="btn btn-primary">hello</Link> */}

            <form>

              <input className="storeusrl" type="url" style={{ height: "63px", width: "500px", fontSize: "25px", align: "center" }} placeholder="    Enter your store url" required="required"></input>
              <button onclick="window.location.href='./Embededpopup.js'" className="Scanbutton" style={{ height: "63px", width: "180px", color: "grey", fontSize: "34px", backgroundColor: "#243cbc" }} >Scan</button>
  
            </form>

            <div className="Howitzworks">
              <h2 style={{ color: "white", fontSize: "35px" }}> How it works ? </h2>
            </div>


            <table width="52%" height="240" align="center" style={{ backgroundColor: '#3047eb' }}  >
              <tr>

                <td>
                  <div className="card_text">
                    <img src="assets/img/scanicon.png" />
                    <p style={{ color: "white", fontSize: "22px" }}> Scan <br/> Your store</p>
                  </div>
                </td>

                <td>
                  <div className="card_text">
                    <img src="assets/img/readandshopi.png" />
                    <p style={{ color: "white", fontSize: "22px" }}>  Read Shopify <br /> Guidelines </p>
                  </div>
                </td>


                <td>
                  <div className="card_text">
                    <img src="assets/img/gallery.png" />
                    <p style={{ color: "white", fontSize: "22px" }}>View <br /> Reports </p>
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