import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormRCC from './src/components/FormRCC';
import FormRFC from './src/components/FormRFC';
import LoginPage from './src/components/Pages/LoginPage'
import HomePage from './src/components/Pages/HomePage';
import Popup from './src/widgets/Login/Popup';

export default function App() {
  return (
    // <HomePage />
    <LoginPage />
    // <Popup />
  );
}