import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, ImageBackground,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioGroup from 'react-native-radio-buttons-group';


export default class SignIn extends Component {

    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    label:'Ticket Checker',
                    value:'ticket checker',
                    color:'black'
                },
                {
                    label: 'Passenger',
                    value: 'passenger',
                    color:'black'
                }
            ],
            show:true,
        }
    }

    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }

      componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }
    
      _keyboardDidShow = () => {
        this.setState({show:false});
      }

      _keyboardDidHide = () => {
        this.setState({show:true});
      }

      toggleHead = () =>{
          if(this.state.show){
              return(
                <Text style={{fontSize:30,marginTop:1,marginBottom:25,fontWeight:'bold',color:'#ED1D24', textAlign:'center'}}>Sign In</Text>
              );
          }
          else{
              return(<Text></Text>);
          }
      }

    onPressRadio= (data) =>{
        this.setState({data});
    }

  render() {
    return (
      <ImageBackground source={require('../images/blue_background.jpg')} style={styles.backgroundStyle}>
      <KeyboardAvoidingView keyboardVerticalOffset= {-300} behavior='padding' style={styles.container}>
            <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../images/appLogo.png')} style={{width:150,height:150,marginVertical:0}} />
                    </View>
                    <View style={styles.formContainer}>
                        {this.toggleHead()}
                        <RadioGroup radioButtons={this.state.data} onPress={this.onPressRadio} flexDirection='row' />
                        <View style={styles.infoContainer}>
                            <FormLabel labelStyle={styles.labelStyles}>User ID</FormLabel>

                            <FormInput 
                            inputStyle={styles.inputFieldStyles} 
                            placeholder="Enter Employee ID or User Email ID" 
                            placeholderTextColor='rgba(255,255,255,0.5)' 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            returnKeyType='next'
                            containerStyle={styles.inputContainer}
                            onSubmitEditing={()=>this.refs.inputPassword.focus()}
                            selectionColor={'white'}
                            />

                            

                            <FormLabel labelStyle={styles.labelStyles}>Password</FormLabel>

                            <FormInput 
                            inputStyle={styles.inputFieldStyles} 
                            placeholder="Enter Password" 
                            placeholderTextColor='rgba(255,255,255,0.5)' 
                            autoCorrect={false} 
                            autoCapitalize='none' 
                            returnKeyType='go'
                            secureTextEntry={true}
                            autoCorrect={false}
                            containerStyle={styles.inputContainer}
                            ref={"inputPassword"}
                            selectionColor={'white'}
                            />
                            <FormValidationMessage></FormValidationMessage>
                            <Button 
                            title="Sign In" 
                            buttonStyle={{
                                backgroundColor:"#000075",
                                borderRadius:50,
                                borderColor: "transparent",
                                borderWidth: 0,
                                height:50,
                                marginTop:10,
                            }} 
                            titleStyle={{
                                fontSize:20,
                                fontWeight:'bold'
                            }}
                            />
                        </View>
                    </View>
                </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    backgroundStyle:{
        width:'100%',
        height: '100%',
        flex:1
    },
    container:{
        flex:1,
        justifyContent:'center',
    },
    logoContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        paddingVertical:10
    },
    formContainer:{
        flex:2,
    },
    inputFieldStyles:{
        fontSize:20,
        color:'white',
        width:'100%'
    },
    inputContainer:{
        borderStyle:'solid',
        borderWidth: 2,
        borderColor:'black',
        borderRadius: 50,
        paddingHorizontal:10,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    labelStyles:{
        fontSize:15,
        color:'black',
    },
    infoContainer:{
        left: 0,
        right:0,
        top: 0,
        bottom:0,
        padding:10
    }
});
