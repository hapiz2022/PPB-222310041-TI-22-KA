import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginForm = () => {
  const [email, setEmail] = useState("");

  const handleSignIn = () => {
    if (email === "222310041@student.ibik.ac.id") {
      Alert.alert("Pesan Sukses", `Selamat Datang, ${email}`);
    } else {
      Alert.alert("Pesan Gagal", "Email yang Anda masukkan salah!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Login Email</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="npm@student.ibik.ac.id"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSignIn}>
          <Text style={styles.btnText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  box: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  btn: {
    backgroundColor: 'purple',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default LoginForm;
