import React, { Component } from "react";
import './App.css';
import './index.js';
// import Shopifyscrppagepopup from './Shopifyscrppagepopup';
//import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Colxx, Separator } from './components/CustomBootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
import { axiosInstnace as axios } from './util/util';
import { endPoints, domain } from './config';
import { history } from './history/history';


class Shopifyscrppage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopurl: "",
    };
  }

  handleToastError = (error) => {
    toast.error(error, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
      toastId: "1",
    });
  };


  myChangeHandler = (event) => {
    this.setState({ shopurl: event.target.value });
  }



  scaninputurl = async (e) => {
    debugger
    e.preventDefault()
    let { shopurl } = this.state;
    const response = await axios.get(`${endPoints.inputshopifyurl}?url=${shopurl}`);

    console.log('vjvjvjvjvjv33' + response);
    console.log('vjvjvjvjvjv' + response.data);

    if (response && response.data.statusCode == 200) {
      let response = response.data;
    }
    console.log('response' + response);
  };



  handleshopurl = event => {
    // let { shopurl } = this.state;
    // console.log(event);
    // this.setState({
    //   shopurl: event.target.value,     
    // })
    // if (shopurl==0) {
    //   handleToastError("Enter Input Must Be a URL Only");
    //   return;
    // }
  }



  render() {
    let { shopurl } = this.state;
    return (
      <div className="asdsadApp" >

        <div style={{ backgroundColor: '#3047eb', height: '880px' }}>
          <Container style={{ width: '95%', maxWidth: '95%' }}>
            <Row>
              <Colxx xxs="6">
                <div className="BrandCandy" >
                  <img src="assets/img/fingerlogo.png" width="40" style={{ float: 'left' }} />
                  <h1 style={{ color: "white", align: "left", fontSize: "44px", paddingLeft: "50px" }}>   BrandCandy </h1>
                </div>
              </Colxx>
              <Colxx xxs="6"></Colxx>
            </Row>
          </Container>


          <div className="form_wrapper" style={{ backgroundColor: '#3047eb' }}>

            <h1 className="checkstorehealth" style={{ color: "white", fontSize: "78px" }} >Check your store's health</h1>
            <p className="counterfeitsandIPinf" style={{ color: "white", fontSize: "30px", left: "20.87%", right: "20.79%" }}> Scan your store for counterfeits and IP infringement.   </p>

            <form onSubmit={this.scaninputurl}>

              <input className="storeusrl" type="url" style={{ height: "63px", width: "500px", fontSize: "25px", align: "center" }} value={this.state.shopurl} onChange={this.myChangeHandler} placeholder="    Enter your store url" required="required"></input>

              {/* <button onClick={() => history.push('/app')} className="Scanbutton"  value={this.state.shopurl}  style={{ height: "63px", width: "180px", color: "grey", fontSize: "34px", backgroundColor: "#243cbc" }} >Scan</button> */}

              <input type="submit" value="Scan" className="Scanbutton" style={{ height: "63px", width: "180px", color: "grey", fontSize: "34px", backgroundColor: "#243cbc" }} />

              <h4>URL {this.state.shopurl}</h4>

              {/* <button onClick= {() => this.handleshopurl (history.push('/Shopifyscrppagepopup'))} value={this.state.shopurl} className="Scanbutton" name= "shopurl" style={{ height: "63px", width: "180px", color: "grey", fontSize: "34px", backgroundColor: "#243cbc" }} >Scan</button>          */}
              {/* <button type="url" onClick= {() => {window.location.href='https://clsslabsdev.myshopify.com/password';}} className="Scanbutton" style={{ height: "63px", width: "180px", color: "grey", fontSize: "34px", backgroundColor: "#243cbc" }} required="required">Scan</button> */}
              {/* <a href="/app" className="Scanbutton" value={this.state.shopurl} style={{ height: "63px", width: "180px", color: "red", fontSize: "34px", backgroundColor: "blue" }} >Scan</a> */}
            </form>


            <div className="Howitzworks">
              <h2 style={{ color: "white", fontSize: "35px" }}> How it works ? </h2>
            </div>


            <table width="52%" height="240" align="center" style={{ backgroundColor: '#3047eb' }}  >
              <tr>

                <td>
                  <div className="card_text">
                    <img src="assets/img/scanicon.png" />
                    <p style={{ color: "white", fontSize: "22px" }}> Scan <br /> Your store</p>
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