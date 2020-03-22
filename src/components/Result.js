import React, { Component } from "react";

class Result extends Component {
  showResult = () => {
    const { name, quote } = this.props.quotation;

    if (!name) return null;

    const moneyQuote = this.props.moneyQuote;

    const { price, percent_change_1h } = quote[moneyQuote];

    return (
      <div className="bg-success py-4">
        <div className="resumen text-light text-center">
          <h2 className="mb-4">Resumen</h2>
          <p>
            <span className="font-weight-bold">
              El precio de {name} en {moneyQuote} es de:
            </span>{" "}
            {(price).toFixed(2)} $
          </p>
          <p>
            <span className="font-weight-bold">
              Porcentaje en la ultima hora:
            </span>{" "}
            {percent_change_1h} %
          </p>
        </div>
      </div>
    );
  };

  render() {
    return (
        <React.Fragment>
            {this.showResult()}
        </React.Fragment>
    )
  }
}

export default Result;
