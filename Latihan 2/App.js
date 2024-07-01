import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import SplashScreen from './src/screens/SplashScreen';
import MyBioClass from './src/screens/MyBioClass';
import MyBioFunction from './src/screens/MyBioFunction';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Home /> */}
      {/* <SplashScreen /> */}
      <MyBioClass />
      {/* <MyBioFunction /> */}
    </SafeAreaView >
  );
}
