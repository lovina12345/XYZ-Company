import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground,TextInput,ScrollView} from 'react-native';
import React from "react";
import { AntDesign, MaterialIcons, Entypo, Octicons,  } from '@expo/vector-icons';
import ImagePicker from './ImagePicker';



const Register =(props)=>{
    return(
        <View  style={styles.container}>
            <ScrollView  style={styles.container}>
            <View style={styles.container1}> 
            <Text>
            <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("XYZ")}}>
            <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
         </Text>
         
         <Text style={{fontWeight:"bold", top: 10, fontSize: 30, paddingLeft: 40,}}>Register</Text> 
         <Text style={{paddingLeft:20, top:20,}}>
            <MaterialIcons name="message" size={24} color="black" />
            </Text>
            <Text style={{paddingLeft:20, top:20,}}>
            <Entypo name="dots-three-vertical" size={24} color="black" />
            </Text>
       
         </View>
         <View style={styles.profile}>
         <ImagePicker />
         {/* <Text style={{color: "red", top: 20,}}>
             ADD PROFILE PHOTO
         </Text> */}
          {/* <View style={{  alignItems: "center",justifyContent:"center"}}>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("ImagePicker")}}>
               <Octicons name="person" size={40} color="black" />
               </TouchableOpacity>
             </View> */}
         </View>
         <View style={{flex: 0.4, top: 20,}}>
         <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Full name
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Email
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Phone Number
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Role
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Twitter
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>

          <Text style={{color: "'#c9c7c7", fontSize: 20, marginVertical: 2}}>
            Linkedin
            </Text>
          <TextInput style={{fontSize: 30, marginVertical: 2, borderBottomWidth: 1}}/>
     </View>
     <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate("Scan")}}>
         <View style={{paddingLeft: 20,}}>
          <Text style={{ color: "white", paddingRight: 30, }}>REGISTER</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
        </View>
        );
    }
    
    export default Register;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,

        },

        container1:{

            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "red",
            top: 20,
            flex: 0.2,
            
        },

        profile:{
          justifyContent:"center",
          alignItems: "center",
         backgroundColor: "black", 
         flex: 0.4,
         top: 20,
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



    })
    