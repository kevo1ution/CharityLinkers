import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './Card';

class Home extends Component {
    render() {
        return (
            <View style={styles.ViewContainer}>
                <View style={styles.headerWrap}>
                    <View>
                        <Text
                            style={styles.header}
                        > Howdy! </Text>
                    </View>
                    <Text
                        style={styles.header2}
                    > Here's your top nonprofits </Text>
                </View>
                <View>
                    <ScrollView bounces={true} style={{width: '100%', height: '62%'}}>
                        <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
                        <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
                        <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
                                                <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
                                                <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
                                                <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
                                                <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
                                                <Card
                            name='American Red Cross'
                            mission='a standard mission lorem ipsum'
                            address='123 sesame st'
                            website='www.sesame.com'
                            email='abc@gmail.com'
                            phone='123456789'
                        />
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
    headerWrap: {
        color: 'white',
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        elevation: 1,
    },
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
        flexDirection: 'column',
        alignSelf: 'center',
    },
    footer: {
        backgroundColor: 'rgba(246, 246, 246, 0.98)',
        width: '100%',
        position: 'absolute',
        paddingBottom: 40,
        bottom: 0,
    },
};


export default Home;
