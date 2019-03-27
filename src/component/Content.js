import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_price: 100
    }
  }

  getState = () => {
    return this.state.old_price;
  }

  render() {
    let {name, price} = this.props; // let name = this.props.name;

    return(
      <div className="content">
        name: {name} <br/>
        price:  {price}
        <h1>Content</h1>
      </div>
    );
  }
}

export default Content;
