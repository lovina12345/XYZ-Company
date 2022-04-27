import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";



const Home =(props)=>{
    return(
        <View  style={styles.container}>
            <View style={styles.name}>
                <Text style={{fontWeight:"bold", fontSize: 50,}}>X Y Z COMPANY</Text>
            </View>
            <View style={styles.contacts}>
                <Text style={{fontWeight:"bold", fontSize: 30,}}>XYZ Contacts</Text>
            </View>

            <View style={styles.get}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate("XYZ")}}>
                <Text style={{fontWeight:"bold", fontSize: 20,}}>Get Started</Text>
                </TouchableOpacity>
                <Text style={styles.round}></Text>
            </View>

        </View>
        );
    }
    
    export default Home;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
          backgroundColor: "pink",
          


        },

        name: {
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold",
            top: 20,
    
        },

        contacts: {
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold",
            top: 230,

        },

        get: {
            justifyContent: "center",
            alignItems: "center",
            fontSize: 20,
            fontWeight: "bold", 
            top: 450,
        },

        round: {
            width: 100,
            height: 5,
            backgroundColor: "red",
             marginTop:10,
            borderRadius: 5,
            marginLeft: 20,
        },




    })
    
      
    