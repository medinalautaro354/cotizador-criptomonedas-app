import React, { Component } from "react";
import OptionSelect from "./OptionSelect";
class Form extends Component {
  moneyRef = React.createRef();
  currencyRef = React.createRef();

  sendData = async e => {
    e.preventDefault();

    let quote = {
      money: this.moneyRef.current.value,
      currencyId: this.currencyRef.current.value
    };

    await this.props.getQuotation(quote);
  };
  render() {
    return (
      <form onSubmit={this.sendData}>
        <div className="form-group">
          <label>Moneda:</label>
          <select className="form-control" ref={this.moneyRef}>
            <option value="" disabled defaultValue>
              Elige tu Moneda
            </option>
            <option value="USD">Dolar Estadounidense</option>
            <option value="MXN">Peso Mexicano</option>
            <option value="GBP">Libras</option>
            <option value="EUR">Euro</option>
            <option value="ARS">Peso Argentino</option>
          </select>
        </div>
        <div className="form-group">
          <label>Criptomoneda</label>
          <select className="form-control" ref={this.currencyRef}>
            {Object.keys(this.props.currencies).map(key => (
              <OptionSelect key={key} currency={this.props.currencies[key]} />
            ))}
          </select>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Cotizar" />
        </div>
      </form>
    );
  }
}

export default Form;
