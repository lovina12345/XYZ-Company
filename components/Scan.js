import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, Octicons, } from '@expo/vector-icons';
import { QRCode } from 'react-native-custom-qr-codes-expo';



const Scan=(props)=>{
    let details = {
        name: "hehd",
        email:"love22@gmail.com",
        phonenumber: "0271601775",
        Role: "whatever",
        twitter: "love133",
        linkedin: "lovina55",
    }
    return(
        <View style={styles.container}>
            <View style={styles.container1}> 
            <Text style={{fontWeight:"bold", top: 50, fontSize: 20,}}>XYZ COMPANY</Text>
            <Text style={{top: 40,}}> 
         <Octicons name="person" size={40} color="black" />
         </Text> 
         </View>
         <View>
             <Text style={{fontWeight:"bold", top: 20, fontSize: 20, paddingLeft: 20,}}>Exchange Contact Information</Text>
             <Text style={{top: 35, paddingLeft: 20,}}>Scan this QR below to share your contacts.</Text>
             <Text style={{top: 40, paddingLeft: 20,}}>contacts</Text>
         </View>
         <View style={{paddingLeft: 60, top: 70,}}>
         <QRCode content={JSON.stringify(details)}/>
         {/* <Image style= {styles.image} source={require("../assets/QR.png")}></Image> */}
         </View>
         <View style= {styles.det}>
             <Image style= {styles.lov} source={require("../assets/fa5.jpg")}></Image> 
            <Text style={{paddingLeft: 5,top: 4, fontWeight:"bold",}}>Williams Daka</Text>
            </View>
            <View style= {styles.det}>
            <Text style={{paddingLeft: 30,top: 2,}}>Head of marketing</Text>
            </View>
            <View style= {styles.det1}>
            <Text style={styles.round}></Text>
            </View>
            <View style= {styles.QR}>
              <Text>Want to add a new connection?</Text>
              <View>
              <View style={styles.outerContainer}>
     <TouchableOpacity  style={styles.btn} onPress={()=>{props.navigation.navigate("QR")}}>
          <Text style={{ color: "white" }}>SCAN</Text>
        </TouchableOpacity>
        </View>
              </View>
            </View>
         </View>
        );
    }
    
    export default Scan;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,

        },

        container1:{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "red",
            flex: 0.3,
        },

        image: {
            height: 300,
            width: 300,
              top: 5,
              
        },

        det: {
            flexDirection: "row",
            top: 120,
            paddingLeft: 20,
        },
        
            lov:{
                height: 30,
                 width: 30,
                  borderRadius: 15 
            },

            round: {
                width: 500,
                height: 3,
                backgroundColor: "grey",
                 marginTop:40,
            },

            det1: {
                top: 120,
            
            },
        
            outerContainer:{
                marginHorizontal: 50,
              },
              btn: {
                padding: 16,
                width: "100%",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "red",
              },

              QR:{
                  flexDirection: "row",
                  top: 130,
                  justifyContent:"space-around",
              },
          




    })
