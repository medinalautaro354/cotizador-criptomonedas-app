import React from "react";
import Header from "./components/Header";
import Result from './components/Result';
import Form from "./components/Form";
import {apiKey, baseUrl} from './configuration/config';
import axios from 'axios';
axios.defaults.headers.get['X-CMC_PRO_API_KEY'] = apiKey;

class App extends React.Component {
  
  state ={
    currencies: [],
    quotation: {},
    moneyQuote: '',
    currencyId: 0,
    loading: false
  }
  async componentDidMount(){
    this.getCurrencies();
  }

  getCurrencies = async() =>{
    let url = `${baseUrl}cryptocurrency/map`;

    await axios.get(url, 
      {
        params:{
          listing_status: 'untracked'
        } 
      })
    .then(response =>{
      this.setState({
        currencies: response.data.data
      })
    })
    .catch(error =>{
      console.log(error);
    })
  }

  getQuotation = async (quote) =>{

    const {money, currencyId} = quote;
    const url = `${baseUrl}cryptocurrency/quotes/latest`


    await axios.get(url, 
      {
        params:{
          id: currencyId,
          convert: money
        }
      })
    .then(response =>{
      
      this.setState({
        quotation:response.data.data[currencyId],
        moneyQuote:money ,
        currencyId
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header title="Cotizador de criptomonedas." />
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light pb-4 main-content">
            <Form currencies = {this.state.currencies} getQuotation={this.getQuotation}/>
            <Result quotation={this.state.quotation} moneyQuote={this.state.moneyQuote} currencyId={this.state.currencyId}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
