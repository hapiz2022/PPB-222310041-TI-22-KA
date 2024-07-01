import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

export class FormRCC extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "IBI Kesatuan",
            subTitle: "Bogor Indonesia"
        }
    }

    render() {
        return (
            <SafeAreaView style={style.container}>
                <View style={style.title}>
                    <Image source={require("../../assets/icons/icon-ibik.png")} style={style.ibik_icon} />
                    <View style={{ margin: 10 }}>
                        <Text style={style.titleText}>{this.state.title}</Text>
                        <Text style={style.subTitleText}>{this.state.subTitle}</Text>
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
                            defaultValue={this.state.title}
                            onChangeText={(text) => this.setState({
                                title: text
                            })}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text>Sub Title</Text>
                        <TextInput
                            style={style.form}
                            placeholder='Enter sub title here'
                            defaultValue={this.state.subTitle}
                            onChangeText={(text) => this.setState({
                                subTitle: text
                            })}
                        />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
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

export default FormRCC