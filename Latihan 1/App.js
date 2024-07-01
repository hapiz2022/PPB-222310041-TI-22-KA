import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("./assets/prof-pict.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.username}>HAPIZ</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Nama Lengkap: HAPIZ ILHAM MAULANA</Text>
        <Text style={styles.info}>Kelas: TI - 22 - KA</Text>
        <Text style={styles.info}>NPM: 222310041</Text>
        <Text style={styles.info}>Tempat, Tanggal Lahir: Bogor, 1 January 1999</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  username: {
    color: "#121212",
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  infoContainer: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  info: {
    color: "#121212",
    fontSize: 16,
    marginVertical: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
});
