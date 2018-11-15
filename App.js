import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Image, View } from 'react-native';
import { Container, Content, Button, Text, } from 'native-base';
import {createStackNavigator} from 'react-navigation';


export default class App extends Component {
  render() {
    return (
      <Container style={{flex:1,justifyContent:'center'}}>
        <ImageBackground source={require('./images/blue_background.jpg')} style={styles.backgroundStyle}>
          <Content >
            <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={require('./images/appLogo.png')} style={{width:150,height:150,marginVertical:0}} />
            </View>
            <Text style={{alignSelf:'center',marginTop:30,fontFamily:'monospace',fontWeight:'bold',fontSize:23}}>Choose an action...</Text>
            <View style={styles.bodyContainer}>
              <Button rounded block style={styles.buttonStyles} onPress={() => this.props.navigation.navigate('SignIn')}>
                <Text>Sign In</Text>
              </Button>
              <Button rounded block style={styles.buttonStyles} onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text>Sign Up</Text>
              </Button>
            </View>
            </View>
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
  container:{
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
  },
  logoContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    paddingVertical:30,
},
bodyContainer:{
  flex:2,
  marginTop:"25%",
},
buttonStyles:{
  marginVertical:20,
  backgroundColor:"#000075",
}
});