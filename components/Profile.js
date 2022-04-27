import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, Octicons,  FontAwesome5, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';



const XYZ=(props)=>{
    const details = props.route.params.data
    return(
        <View style={styles.container}>
            <View style={styles.container1}> 
            
            <Text style={{top: 30,}}>
            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Home")}}>
            <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
            </Text>
            
            <Text style={{fontWeight:"bold", top: 30, fontSize: 20,}}>Member Profile</Text>  
         </View>
         <View style= {styles.det}>
            <Image style= {styles.lov} source={require("../assets/fa5.jpg")}></Image>
            <Text style={{paddingLeft: 5,top: 4, fontWeight:"bold",}}>{details.name}</Text>
            </View>
         <View style= {styles.det2}>
            <Text style={{paddingLeft: 30,top: 2,}}>Head of marketing</Text>
            </View>
            <View style= {styles.det1}>
            <Entypo name="twitter-with-circle" size={24} color="black" />
            <Text style={{paddingLeft: 15,}}>
            <FontAwesome5 name="linkedin" size={24} color="black" />
            </Text>
            </View>
         <View style= {styles.det3}>
         <Ionicons name="md-call-outline" size={24} color="black" />
         <Text  style={{paddingLeft: 15,}}>+233 (271)601 775</Text>
         </View>
         <View style= {styles.det4}>
         <MaterialCommunityIcons name="email-outline" size={24} color="black" />
         <Text  style={{paddingLeft: 15,}}>lovinaafrifa223344@gmail.com</Text>
         </View>
         <View style= {styles.det5}>
         <SimpleLineIcons name="location-pin" size={24} color="black" />
         <Text  style={{paddingLeft: 15,}}>Ghana, Dansoman</Text>
         </View>
         


        

         </View>
        );
    }
    
    export default XYZ;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,

        },

        container1:{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "red",
            flex: 0.2,
        },

        det: {
            flexDirection: "row",
            top: 20,
            paddingLeft: 20,
        },

        lov:{
            height: 40,
             width: 40,
              borderRadius: 15 
        },

        det1: {
            flexDirection: "row",
            top: 30,
            paddingLeft: 30,
        },
 
        det2: {
            flexDirection: "row",
            top: 10,
            paddingLeft: 30,
        },

        det3: {
            flexDirection: "row",
            top: 40,
            paddingLeft: 30,
        },

        det4: {
            flexDirection: "row",
            top: 40,
            paddingLeft: 30,
        },

        det5: {
            flexDirection: "row",
            top: 40,
            paddingLeft: 30,
        },

        deti: {
            flexDirection: "row",
            top: 80,
            paddingLeft: 20,
        },






    })
