import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export default class LoginPage extends Component {

constructor(props){
  super(props)
  this.state={
    username:"",
    password:""
  }
}

  render() {
    return (
      <View style={Mystyle.main}>
     <ScrollView style={Mystyle.container} showsVerticalScrollIndicator={false}>
       <View style={Mystyle.headerCont}>
         <Text style={Mystyle.header}>Login</Text>
         </View>

       <View>

      <TextInput style={Mystyle.input}
      autoCapitalize
      autoCorrect={true}
      placeholder='Username'
      value={this.state.username}
      onChange={(username)=>{
        this.setState({username})}
      }
      />
      <TextInput style={Mystyle.input}
      secureTextEntry={true}
      placeholder='Password' 
      
      value={this.state.password}
      onChange={(password)=>{
        this.setState({password})}
      }
      />
     
      
      
      <Text style={Mystyle.FogPass}>Forgot password?</Text>
       </View>

      <View>
      <TouchableOpacity style={Mystyle.butCont}>
        <Text style={Mystyle.butText}>Log in</Text>
      </TouchableOpacity>
      </View>

      <View style={Mystyle.noAccCont}>
      <Text style={Mystyle.Dont}>Don't have account? </Text>
      <Text style={Mystyle.signUp}>Sign up</Text>
      </View>
     </ScrollView>
     </View>
    )
  }
}

const Mystyle = StyleSheet.create({
  main:{
    borderWidth:1,
    borderColor:"#989ea3",
    margin:10,
    borderRadius:20
  },
  container:{
    marginHorizontal:50,
  
    
  },
  header:{
    fontSize:50,
    color:"#8d11ba",
   
  },

  headerCont:{
    marginBottom:50,
  },

  input:{
    borderBottomWidth:2,
    borderBottomColor:"#8d11ba",
    height:50,
    fontSize:20,
    marginTop:20
  },
  FogPass:{
    alignSelf:"flex-end",
    marginVertical:15,
    color:"#4e95d4"
  },
  butCont:{
    height:50,
    backgroundColor:"#8d11ba",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10,
    marginVertical:30
  },
  butText:{
    color:"white",
    fontSize:25
  },
  noAccCont:{
    flexDirection:"row",
   justifyContent:"center",
   
  },
  Dont:{
    marginRight:10,
    fontSize:16,
    
  },
  signUp:{
    fontSize:16,
    color:"#4e95d4",
    marginBottom:100
  }

})