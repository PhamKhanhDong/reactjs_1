import React, { Component } from 'react';
import Header from './Header';
import Left from './Left';
import Right from './Right';
import Content from './Content';
import Footer from './Footer';
import '../index.css';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 1,
      price: 10
    }

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let data = {
      name: 2,
      price: 12
    };
    this.setState({ //this function use to set state
      name: data.name,
      price: data.price
    });
  }



  //arrow function in react
  handleClick = () => {
    this.setState({
      name: this.state.name + 1,
      price: this.state.price + 1
    });
  }

  callContent = () => {
    // console.log(this.refs);
    console.log(this.refs.content.getState());
  }

  onSubmit = data => {
    console.log(data);
  }

  render() {
    // let name = this.state.name;
    // let price = this.state.price;
    let { price, name } = this.state;
    // console.log(name, ' ' ,price);
    return(
      <div className='wrapper'>
        <h1 className="KD">Hello word</h1>
        <input type="button" value="click" onClick={() => this.handleClick()}/>
        <input type="button" value="call content" onClick={() => this.callContent()}/>
        <Header />
        <Left />
        <Content ref="content" name={name} price={price} onSubmit={this.onSubmit}/>
        <Right />
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
