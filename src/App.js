import React, {Component} from 'react';
import './App.css';
import NavComponent from './navbar/Navbar'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact"
import {Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div>
                <NavComponent/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        );
    }
}

export default App