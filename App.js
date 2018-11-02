import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class App extends Component {
  render() {
    return (
      <Container>
        <ImageBackground source={require('./images/blue_background.jpg')} style={styles.backgroundStyle}>
          <Content>
            <Image source={require('./images/appLogo.png')} style={{width:150,height:150,marginVertical:0}} />
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const styles= StyleSheet.create({
  backgroundStyle:{
    width:'100%',
    height: '100%',
    flex:1
  },
});