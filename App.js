import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import React, { Component } from 'react'
import LoginPage from './LoginPage';

// export default class App extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       name:"",
//       email:"",
//       password:""
//     }
//   }
  
//   render() {
//     return (
  //     <View style={styles.container}>
  //     <View style={styles.form}>
  //     <Text style={styles.header}>Feel free to register with us</Text>
  //    <Text style={styles.Text}>Name</Text>
  //       <TextInput style={styles.input}
  //       autoCapitalize
  //       value={this.state.name}
  //       onChange={(name)=>{
  //         this.setState({name})
  //       }}
  //       autoCorrect={true}
  //       placeholder= 'Enter name' />

  //    <Text style={styles.Text}>Email</Text>
  //       <TextInput style={styles.input}
  //       autoCapitalize="none"
  //       placeholder='Enter email' 
  //       value={this.state.email}
  //        onChange={(email)=>{
  //         this.setState({email})
  //       }}
  //       />

  //    <Text style={styles.Text}>Password</Text>
  //       <TextInput style={styles.input}
  //       autoCapitalize="none"
  //       placeholder='Enter password'
  //       secureTextEntry={true}
  //     value={this.state.password}
  //      onChange={(password)=>{
  //         this.setState({password})
  //       }}
  //       />
  //   <TouchableOpacity style={styles.button}>
  //     <Text >Signup</Text>
  //   </TouchableOpacity>
  //       </View>
      
  
  //   </View>




//     )
//   }
// }


// export default class App extends Component {

//   constructor(props){
//         super(props)
//         this.state={
//           name:["Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe",, "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary","Eric", "Okyere","Joe","Mary"],
          
//         }
//       }


//   render() {
//     return (
//      <View style={Mystyles.container}>
//       <FlatList 
//       data={this.state.name}
//       renderItem={({item})=>{
//       return<Text>{item}</Text>
    
//       }}
//       keyExtractor={(item, index)=>index}
//       />

      
      
//      </View>
//     )
//   }
// }




export default class App extends Component {
  render() {
    return (
      <View style={Mystyles.container} >
        <LoginPage />
      
      </View>
    )
  }
}




const Mystyles = StyleSheet.create({
 container: {
   top:85,
    
 
   

    
  },
//   input:{
//    backgroundColor:"white",
//     width:345,
//     borderColor:"white",
//     borderWidth:1,
//     borderRadius:20,
//    paddingHorizontal:5,
//    marginBottom:10,
//    height:25
//   },
//   form:{
//     backgroundColor:"black",
//     padding:5,
//     borderRadius:"10",
   
  
//   },
//   Text:{
//     color:"white"
//   },
//   button:{
//     backgroundColor:"white",
//     color:"black",
   
//     alignItems:"center",
//     alignSelf:"center",
//     width:150,
//    marginVertical:20,
//     borderRadius:10,
//    height:20,
// display:"flex",

//   },
//   header:{
//     alignSelf:"center",
//     color:"white",
//     fontWeight:"bold",
//     fontSize:"lager"
//   }

});
