import React, {Component} from "react";
import Header from "./Component/Header"
import Footer from './Component/Footer'
import List from './Component/List';class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <h1>Component dari Class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama = 'aufa'/>

      </div>
    );
  }
} export default App;