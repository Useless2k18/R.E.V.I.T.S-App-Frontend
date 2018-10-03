import React, { Component } from 'react'
import { Text, StyleSheet, View , Image, ImageBackground} from 'react-native'

export default class Splash extends Component {
  render() {
    return (
      <View source={require('../images/blue_background.jpg')} style={styles.container}>
        <View style={styles.main}>
            <Image source={require('../images/splashLogo.png')} style={{width:220,height:273}}></Image>
            <Text style={styles.title}>Ticket E-Verification System</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    main:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
    },
    title:{
        fontSize:25,
        color:'#D7122D',
        fontWeight: 'bold',
        textAlign: 'center',
        margin:15,
    },
});
