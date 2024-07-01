import { View, Text, SafeAreaView, TouchableHighlight, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import Dialog, { DialogTitle, DialogContent, DialogFooter, DialogButton, SlideAnimation, ScaleAnimation } from 'react-native-popup-dialog'

const Popup = () => {
    const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
    const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
    const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    React Native Toast – Toast Alert for Android
                </Text>
                {/* For Default Animation Dialog */}
                <TouchableHighlight
                    style={styles.buttonStyle}
                    onPress={() => setDefaultAnimationDialog(true)}>
                    <Text style={styles.buttonTextStyle}>
                        Default Animation Dialog
                    </Text>
                </TouchableHighlight>

                {/* For Scale Animation Dialog */}
                <TouchableHighlight
                    style={styles.buttonStyle}
                    onPress={() => setScaleAnimationDialog(true)}>
                    <Text style={styles.buttonTextStyle}>
                        Scale Animation Dialog
                    </Text>
                </TouchableHighlight>

                {/* For Slide Animation Dialog */}
                <TouchableHighlight
                    style={styles.buttonStyle}
                    onPress={() => setSlideAnimationDialog(true)}>
                    <Text style={styles.buttonTextStyle}>
                        Slide Animation Dialog
                    </Text>
                </TouchableHighlight>

                <Dialog
                    onDismiss={() => {
                        setDefaultAnimationDialog(false);
                    }}
                    width={0.9}
                    visible={defaultAnimationDialog}
                    rounded
                    actionsBordered
                    dialogTitle={
                        <DialogTitle
                            title="Default Animation Dialog Simple"
                            style={{
                                backgroundColor: '#F7F7F8',
                            }}
                            hasTitleBar={false}
                            align="left"
                        />
                    }
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="CANCEL"
                                bordered
                                onPress={() => {
                                    setDefaultAnimationDialog(false);
                                }}
                                key="button-1"
                            />
                            <DialogButton
                                text="OK"
                                bordered
                                onPress={() => {
                                    setDefaultAnimationDialog(false);
                                }}
                                key="button-2"
                            />
                        </DialogFooter>
                    }>
                    <DialogContent
                        style={{
                            backgroundColor: '#F7F7F8',
                        }}>
                        <Text>
                            Here is an example of default animation dialog
                        </Text>
                    </DialogContent>
                </Dialog>

                <Dialog
                    onTouchOutside={() => {
                        setScaleAnimationDialog(false);
                    }}
                    width={0.9}
                    visible={scaleAnimationDialog}
                    dialogAnimation={new ScaleAnimation()}
                    onHardwareBackPress={() => {
                        setScaleAnimationDialog(false);
                        console.log('onHardwareBackPress');
                        return true;
                    }}
                    dialogTitle={
                        <DialogTitle
                            title="Scale Animation Dialog Sample"
                            hasTitleBar={false}
                        />
                    }
                    actions={[
                        <DialogButton
                            text="DISMISS"
                            onPress={() => {
                                setScaleAnimationDialog(false);
                            }}
                            key="button-1"
                        />,
                    ]}>
                    <DialogContent>
                        <View>
                            <Text>
                                Here is an example of scale animation dialog.
                                Close using back button press
                            </Text>
                            <Button
                                title="Close"
                                onPress={() => {
                                    setScaleAnimationDialog(false);
                                }}
                                key="button-1"
                            />
                        </View>
                    </DialogContent>
                </Dialog>

                <Dialog
                    onDismiss={() => {
                        setSlideAnimationDialog(false);
                    }}
                    onTouchOutside={() => {
                        setSlideAnimationDialog(false);
                    }}
                    visible={slideAnimationDialog}
                    dialogTitle={
                        <DialogTitle
                            title="Slide Animation Dialog Sample"
                        />
                    }
                    dialogAnimation={
                        new SlideAnimation({ slideFrom: 'bottom' })
                    }>
                    <DialogContent>
                        <Text>
                            Here is an example of slide animation dialog.
                            Please click outside to close the the dialog.
                        </Text>
                    </DialogContent>
                </Dialog>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#307ecc',
        padding: 16,
    },
    buttonStyle: {
        minWidth: '100%',
        padding: 10,
        backgroundColor: '#f5821f',
        margin: 15,
    },
    buttonTextStyle: {
        color: 'white',
        textAlign: 'center',
    },
    titleStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
    },
});

export default Popup