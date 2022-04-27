import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
import React,{useState,useEffect } from "react";
import { AntDesign, MaterialIcons, Entypo, Octicons,SimpleLineIcons,  Ionicons,  } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';



const XYZ=(props)=>{
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation()

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("Profile", {
      data: JSON.parse(data)
    })
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return(
        <View style={styles.container}>
          <View style={{flex: 9, backgroundColor: "red"}}>
          <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
          </View>
          <View style={{flex: 1, backgroundColor: "green"}}></View>
            {/* <View style={styles.container1}> 
            <SimpleLineIcons name="energy" size={24} color="white" />
            <Entypo name="cross" size={24} color="white" />
         </View> */}
         {/* <View style={styles.scan}>
         <Ionicons name="scan" size={400}color="white" />
         <Text style={{top: 15, paddingLeft: 100, color: "white",}}>Place QR Code Within Frame</Text>
         </View> */}
         {/* <View style= {styles.det1}>
         <Text style={{top: 20,}}>Want to add a new connection?</Text>
         <View style={{ width: 100, height: 40, backgroundColor:"red", alignItems: "center",
         justifyContent: "center",  }}>
              <TouchableOpacity onPress={()=>{props.navigation.navigate("Scan")}}>
             <Text style={{color:"white", }}>Send QR</Text>
             </TouchableOpacity>
         </View>
         </View> */}
         </View>
        );
    }
    
    export default XYZ;
    
    const styles = StyleSheet.create({
        container: {
          flex: 10,
          backgroundColor: "black"

        },

        container1:{
            flex: 0.1,
            flexDirection: "row",
            justifyContent: "space-between",
            

        },

        scan:{
         justifyContent: "center",
         top: 20,
        },

          det1: {
            top: 160,
             flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "white",
            flex: 0.2,
          },

        

       
    })