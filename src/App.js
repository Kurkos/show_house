import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

import Navigation from './components/navigation/Navigation';
import SideBar from './components/navigation/SideBar';
import Introduction from './components/body/Introduction';
import MainBody from './components/body/MainBody';
import Outro from './components/body/Outro';
import Footer from './components/body/Footer';
import AboutBar from './components/navigation/AboutBar';

import './css/main.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInfoCircle, faHome, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(
  faInfoCircle, faHome, fab, faTimesCircle
);



export default class App extends Component {
  state={
    about: false,
  }
  aboutSwitch = () =>{

    this.setState({about: !this.state.about});
  }


  render() {
 
    return (
      <Provider store={store}>
      <div className="App">
        <Navigation  aboutSwitch={this.aboutSwitch}/>
        <SideBar/>
        <AboutBar about={this.state.about} aboutSwitch={this.aboutSwitch}/>
        <div className="App-body">
          <Introduction/>
          <MainBody />
          <Outro/>

          <Footer/>
        </div>
    </div>
    </Provider>
    )
  }
}
