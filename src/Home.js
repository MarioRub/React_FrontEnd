import React, { Component } from 'react';
import './App.css';
import auth0Client from './Auth';
import Navbar from "./components/Navbar"
import Form from "./components/Form"

class Home extends Component {
    componentDidMount() {
        if (!auth0Client.isAuthenticated()) {
            auth0Client.signIn();
        }
    }
    signOut = () => {
        auth0Client.signOut();
        this.props.history.replace('/');
    }
    render() {

        return (
            <div className="App" >
                <Navbar/>
                <Form/>
            </div>
        )
    }

}

export default Home;