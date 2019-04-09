import React, { Component } from 'react';

import './styles/main.scss';

import Header from './components/Header';
import SignInForm from './components/SignInForm';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App container">
         <Header/>
         <SignInForm/>
         <Footer/>
      </div>
    );
  }
}

export default App;
