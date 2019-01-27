import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    render() {
        return (
            <View style={styles.ViewContainer}>
                <View>
                    <Text
                        style={styles.header}
                    > Howdy! </Text>
                </View>
                <Text
                    style={styles.header2}
                > Here's your top nonprofits </Text>
                <View
                    style={styles.divider}
                />
                <View>
                    <ScrollView style={{height: "100%"}}>
                        <Image style={{height: 600}} source={require('../Images/diamonds.jpeg')}/>
                    </ScrollView>
                </View>
                <View
                    style={styles.footer}
                >
                    <TouchableHighlight
                        underlayColor='rgb(226, 118, 141)'                                            
                        style={styles.button}
                    >
                        <Text
                            style={styles.buttonText}
                        > Donate Cash </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        underlayColor='rgb(226, 118, 141)'
                        style={styles.button}
                        onPress={() => Actions.camera()}
                    >
                        <Text
                            style={styles.buttonText}
                        > Donate Items </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = {
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    header: {
        marginLeft: 15,
        marginBottom: 7.5,
        fontSize: 40,
        fontFamily: 'System',
        fontWeight: 'bold',
    },
    header2: {
        fontSize: 30,
        marginLeft: 15,
        marginBottom: 17.5,
    },
    button: {
        backgroundColor: '#FF7C93',
        margin: 15,
        marginBottom: 0,
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
    },
    ViewContainer: {
        width: '100%',
        height: '100%',
        paddingTop: 50,
        flexDirection: 'column',
        alignSelf: 'center',
    },
    footer: {
        backgroundColor: 'rgba(226, 226, 226, 0.98)',
        width: '100%',
        position: 'absolute',
        paddingBottom: 40,
        bottom: 0,
    }
};


export default Home;
