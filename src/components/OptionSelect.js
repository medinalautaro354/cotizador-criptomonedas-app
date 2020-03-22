import React, { Component } from "react";

class OptionSelect extends Component {
  render() {
    const { id, name } = this.props.currency;
    return <option value={id}>{name}</option>;
  }
}

export default OptionSelect;
