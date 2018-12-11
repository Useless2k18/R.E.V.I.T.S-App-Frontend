import React, { Component } from 'react';
import { ImageBackground, StyleSheet,Image,View } from 'react-native';
import { Container, Content, Button, Text, Form, Item, Label, Input, } from 'native-base';


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
                            <Label style={styles.fieldLabels}>Email</Label>
                            <Input
                              autoCorrect={false} 
                              autoCapitalize='none'
                              returnKeyType='next'

                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.fieldLabels}>First Name</Label>
                            <Input
                              autoCorrect={false} 
                              autoCapitalize='none'
                              returnKeyType='next'
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.fieldLabels}>Last Name</Label>
                            <Input
                              autoCorrect={false} 
                              autoCapitalize='none'
                              returnKeyType='next'
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.fieldLabels}>Password</Label>
                            <Input
                              secureTextEntry={true}
                              autoCorrect={false} 
                              autoCapitalize='none' 
                              returnKeyType='next'
                            />
                        </Item>
                        <Item floatingLabel>
                            <Label style={styles.fieldLabels}>Re-enter Password</Label>
                            <Input
                              secureTextEntry={true}
                              autoCorrect={false} 
                              autoCapitalize='none' 
                              returnKeyType='go'
                            />
                        </Item>
                    </Form>
                    <Button rounded block style={styles.buttonStyles}>
                      <Text>Register</Text>
                    </Button>
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
    flex:3,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
  },
  fieldLabels:{
    fontFamily:'monospace',
    fontSize:18,
    fontWeight:'bold',
    color:'#ffffff',
  },
  buttonStyles:{
    marginVertical:20,
    backgroundColor:"#000075",
  },
})
