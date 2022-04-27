import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo,  } from '@expo/vector-icons';



const XYZ=(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.container1}> 
            <Text style={{paddingLeft:20, top:10,}}>
            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Home")}}>
         <AntDesign name="arrowleft" size={40} color="black" />
         </TouchableOpacity>
         </Text>
         <Text style={{fontWeight:"bold", top: 10, fontSize: 30, paddingLeft: 40,}}>Sign In</Text> 
         <Text style={{paddingLeft:20, top:20,}}>
            <MaterialIcons name="message" size={24} color="black" />
            </Text>
            <Text style={{paddingLeft:20, top:20,}}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
            </Text>
         </View>
         <View>
         <Image style= {styles.image} source={require("../assets/off1.jpg")}></Image>
         </View>
        <View>
            <Text style={{fontWeight:"bold", top: 20, fontSize: 20, paddingLeft: 20,}}>KEEP IN TOUCH WITH THE PEOPLE OF XYZ COMPANY</Text>
            <Text style={{paddingLeft: 20, top: 40,}}>Sign in or register with you XYZ Company</Text>
        </View>
        <View style={styles.form}>
            <View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Register")}}>
            <Text style={{paddingLeft: 20,}}>REGISTER</Text>
            </TouchableOpacity>
            <Text style={styles.round}></Text>
            </View>
            <View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("Signin")}}>
            <Text style={{paddingLeft: 20, }}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={styles.round}></Text>
            </View>
        </View>
        </View>
        );
    }
    
    export default XYZ;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,

        },

        image: {
            height: 100,
            width: 100,
              top: 20,
              width: 412,
              height: 350,
            //   marginBottom:30,
            //   marginLeft: 20,
              
        },

        container1:{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "red",
            flex: 0.2,
            top: 20,
        },

        form:{
            flexDirection: "row",
            justifyContent: "space-around",
            top: 100,
        },

        round: {
            width: 60,
            height: 5,
            backgroundColor: "red",
             marginTop:5,
            borderRadius: 5,
            marginLeft: 20,
        },




    })