import React, { Component } from 'react';
import { ImageBackground, StyleSheet,Image,View } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Label, } from 'native-base';


export default class SignUp extends Component {
  render() {
    return (
      <Container>
          <ImageBackground source={require('../images/blue_background.jpg')} style={styles.backgroundStyle}>
            <Content>
                <View style={styles.container}>
                    <Text style={{alignSelf:'center',marginTop:10,fontFamily:'monospace',fontWeight:'bold',fontSize:23}}>Register Details:</Text>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email</Label>
                        </Item>
                        <Item floatingLabel>
                            <Label>Name</Label>
                        </Item>
                    </Form>
                </View>
            </Content>
          </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  backgroundStyle:{
    width:'100%',
    height: '100%',
    flex:1,
  },
  container:{
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
  },
})
