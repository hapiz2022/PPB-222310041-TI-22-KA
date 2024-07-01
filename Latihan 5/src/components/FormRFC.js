import { View, Text, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const FormRFC = () => {

    const [title, setTitle] = useState("IBI Kesatuan");
    const [subTitle, setSubTitle] = useState("Bogor Indonesia");

    return (
        <SafeAreaView style={style.container}>
            <View style={style.title}>
                <Image source={require("../../assets/icons/icon-ibik.png")} style={style.ibik_icon} />
                <View style={{ margin: 10 }}>
                    <Text style={style.titleText}>{title}</Text>
                    <Text style={style.subTitleText}>{subTitle}</Text>
                </View>
            </View>
            <View style={style.formContainer}>
                <View style={{ margin: 10 }}>
                    <Text style={style.headerText}>Change Logo</Text>
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Title</Text>
                    <TextInput
                        style={style.form}
                        placeholder='Enter title here'
                        defaultValue={title}
                        onChangeText={(text) => setTitle(text)}
                    />
                </View>
                <View style={{ margin: 10 }}>
                    <Text>Sub Title</Text>
                    <TextInput
                        style={style.form}
                        placeholder='Enter sub title here'
                        defaultValue={subTitle}
                        onChangeText={(text) => setSubTitle(text)}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    titleText: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 20

    },
    subTitleText: {
        color: 'purple'
    },
    ibik_icon: {
        width: 50,
        height: 50,
        margin: 5
    },
    formContainer: {
        flex: 9,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    form: {
        borderBottomColor: '#5A5A5A',
        borderBottomWidth: 1,
        padding: 10
    }
})

export default FormRFC