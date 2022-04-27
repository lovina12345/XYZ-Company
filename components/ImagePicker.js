// import React,{useState} from 'react';
// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import {Octicons} from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

// const  Picker = async()=> {

//    const [image,setImage] = useState("")

  // let openImagePickerAsync = async () => {
  //   let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //     alert("Permission to access camera roll is required!");
  //     return;
  //   }

  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   console.log(pickerResult);
  // }

  // let result = await ImagePicker.launchImageLibraryAsync({
  //   mediaTypes: ImagePicker.MediaTypeOptions.All,
  //   allowsEditing:true,
  //   aspect:[4,3],
  //   quality:1,
  // })

  // console.log(result.uri)

  // if(!result.cancelled){
  //   setImage(result.uri)
  // }
  
  // return (
    
      
      
  //     <TouchableOpacity onPress={Picker}>
  //       {image?<Image source={{ uri: image }}  style={{width:200, height:200}} />:  <Octicons name="person" size={24} color="black" /> }
       
         
        {/* <Text>Pick a photo</Text> */}
//       </TouchableOpacity>
      
      
     
    
//   );
// }

// export default Picker;



import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React, { useState } from 'react';
import { AntDesign, Octicons, } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
const  Picker = ()=>
{
    const [image, setImage] = useState("file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FGaamySand-945bd0fe-e2b8-479f-abe2-7afdf678a042/ImagePicker/6f53e0b0-d104-4862-9a70-b93d6ab0fa83.jpg");
    const pickImage = async () =>
    {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result.uri);
        if (!result.cancelled)
        {
            setImage(result.uri);
        }
    };
    return (
           <TouchableOpacity style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center'}} onPress={pickImage}>
                   {image ? <Image source={{ uri: image }} style={{ width: 400, height: 150, }} /> : <View style={{ flex: 0,
      alignItems: "center",
        justifyContent:"center"}}>
               <Octicons name="person" size={30} color="black" />
             </View>}
        </TouchableOpacity>
    )
}
export default Picker;
const styles = StyleSheet.create({})
