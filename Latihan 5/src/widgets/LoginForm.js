import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const LoginForm = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validEmail, setValidEmail] = useState("");
    const [isOpenPass, setOpenPass] = useState(true);
    const [validPassword, setValidPassword] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const handlerValidMail = (value) => {
        if (value) {
            let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/;
            if (!regEmail.test(value)) {
                setValidEmail("Invalid Email Address");
            } else {
                setValidEmail("");
            }
        } else {
            setValidEmail("This field is required");
        }
        setEmail(value);
    };

    const handlerOpenPassword = () => {
        setOpenPass(!isOpenPass);
    };

    const checkPasswordValidity = (value) => {
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
            return 'Password must have at least one Uppercase Character.';
        }

        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
            return 'Password must have at least one Lowercase Character.';
        }

        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
            return 'Password must contain at least one Digit.';
        }

        const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(value)) {
            return 'Password must contain at least one Special Symbol.';
        }

        return '';
    };

    const handlerValidPassword = (value) => {
        if (value.length < 3) {
            setValidPassword("Type minimum 3 characters.");
        } else {
            let checkPassword = checkPasswordValidity(value);
            if (checkPassword) {
                setValidPassword(checkPassword);
            } else {
                setValidPassword("");
            }
        }
        setPassword(value);
    };

    const handlerSignIn = () => {
        if (email === "212310016@student.ibik.ac.id" && password === "BESTstudent_2023") {
            Alert.alert("Success", "Login successful", [
                { text: "OK", onPress: () => navigation.navigate('HomePage') }
            ]);
        } else {
            setModalVisible(true);
        }
    };

    return (
        <View style={formLogin.container}>
            <View style={formLogin.frm_row}>
                <Text style={formLogin.text_label}>Email</Text>
                <TextInput
                    placeholder='npm@student.ibik.ac.id'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize='none'
                    style={formLogin.text_input}
                    onChangeText={(text) => handlerValidMail(text)}
                />
                <Text style={{ color: 'red' }}>{validEmail}</Text>
            </View>
            <View style={formLogin.frm_row}>
                <Text style={formLogin.text_label}>Password</Text>
                <View style={{ ...formLogin.text_input, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        secureTextEntry={isOpenPass}
                        placeholder='Enter your password'
                        autoCorrect={false}
                        style={{ ...formLogin.text_input, borderWidth: 0, padding: 0, width: "90%" }}
                        onChangeText={(text) => handlerValidPassword(text)}
                    />
                    <Pressable onPress={() => handlerOpenPassword()}>
                        <FontAwesome5 name={(isOpenPass) ? "eye" : "eye-slash"} size={25} color="purple" />
                    </Pressable>
                </View>
                <Text style={{ color: 'red' }}>{validPassword}</Text>
            </View>
            <TouchableOpacity style={formLogin.btn_signin} onPress={handlerSignIn}>
                <Text style={formLogin.btn_signin_text}>Sign In</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Email/Password is not match</Text>
                        <Pressable
                            style={[styles.button]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const formLogin = StyleSheet.create({
    container: {
        flex: 3,
        padding: 20,
        backgroundColor: 'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    frm_row: {
        marginBottom: 15
    },
    text_label: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16
    },
    text_input: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: 'purple'
    },
    btn_signin: {
        backgroundColor: 'purple',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop: 15
    },
    btn_signin_text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16
    }
});

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10
    },
    button: {
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 30,
        backgroundColor: 'purple'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center'
    }
});

export default LoginForm;
