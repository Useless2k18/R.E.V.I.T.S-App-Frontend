/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './screens/Splash';
import SignIn from './screens/SignIn'
import {name as appName} from './app.json';

class Main extends Component{

    constructor(props){
        super(props)
        this.state={
            currentScreen : 'Splash',
        };
    
        setTimeout(() => {
            this.setState({currentScreen: 'App'})
        }, 3000);
    }

    render(){
        const {currentScreen} = this.state;
        let mainscreen = currentScreen === 'Splash' ? <Splash/> : <App/>
        return mainscreen;
    }

}

AppRegistry.registerComponent(appName, () => Main);
