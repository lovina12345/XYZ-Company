import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, TextInput, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo,  } from '@expo/vector-icons';



const Signin=(props)=>{
    return(
        <View  style={styles.container}>
<View style={styles.container1}>  
         <Text style={{fontWeight:"bold", top: 2, fontSize: 30,  paddingRight: 40,}}>Sign In</Text> 
         </View>
         <View>
         <Image style= {styles.image} source={require("../assets/off2.jpg")}></Image>
         </View>
         <View style={{top: 30,}}>
         <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Email
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Password
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>
     </View>
     <View style={styles.outerContainer}>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Scan")}}>
         <View style={{paddingLeft: 20,}}>
          <Text style={{ color: "white", paddingRight: 30, }}>Login</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.signup}> Forgot? 
        <Text style={styles.sign}>Reset Password</Text>
         </Text>
     </View>
        </View>
        );
    }
    
    export default Signin;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,

        },

        container1:{
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "red",
            top: 25,
            
        },

        image: {
            height: 100,
            width: 100,
              top: 25,
              width: 412,
              height: 350,
        },

        btn: {
             padding: 16,
            width: "100%",
            height: 50,
            borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
             backgroundColor: "red",
             top: 50,
             paddingLeft: 50,
            
            
          },

        signup: {
            padding: 20,
         paddingHorizontal: 10,
            top: 50,
            paddingLeft: 50,
          },
          sign:{
            color: "#8A39E1",
          },

          outerContainer:{
            marginHorizontal: 50,
            paddingLeft: 50,
          },



    })
    