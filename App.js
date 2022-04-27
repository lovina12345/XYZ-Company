import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Register from "./components/Register";
import XYZ from "./components/XYZ";
import Scan from "./components/Scan";
import Profile from "./components/Profile";
import QR from "./components/QR";



const Stack= createNativeStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
        <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="XYZ" component={XYZ} options={{headerShown:false}} />
        <Stack.Screen name="Scan" component={Scan} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="QR" component={QR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

