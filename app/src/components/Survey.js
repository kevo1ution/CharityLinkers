import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image, TextInput, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { Icon } from 'native-base';

class Survey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: null,
            state: null,
            //ids: {1: false, 2: false, 3: false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false}
            ids: [false, false, false, false, false, false, false, false, false, false]
        }
    }
    
    setCity(input) {
        this.state.city = input;
    }

    setLocation(input) {
        this.state.state = input;
    }

    toggleIds(id) {
        //if (this.state.ids[id]) this.state.ids[id] = false;
        //else this.state.ids[id] = true;
        this.state.ids[id-1] = !this.state.ids[id-1];
        this.setState({99: false});
    }

    getButtonStyle(id) {
        if (this.state.ids[id-1]) return {flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', borderRadius: 10};
        return {flex: 1, backgroundColor: 'rgba(0,0,0,0.0)', borderRadius: 10};
    }

    /**
     * Send information to the server and then go to the home view.
     */
    sendSurvey() {
        payload = [];
        for (let i = 0; i < 10; i++) {
            if (this.state.ids[i]) payload.push(i);
        }
        console.log(JSON.stringify({
            city: this.state.city,
            state: this.state.state,
            val1: payload[0],
            val2: payload[1],
            val3: payload[2],
         }));
        fetch('http://ec2-18-191-151-255.us-east-2.compute.amazonaws.com:8080/search', {
            method: 'post',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
               city: this.state.city,
               state: this.state.state,
               val1: payload[0],
               val2: payload[1],
               val3: payload[2],
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
            Actions.home({'data': data});
        }).catch(err => {
            console.log("Error: ", err);
        })
    }

    render() {
        return (
            <View style={{height: '100%'}}>
                <View style={styles.headerWrap}>
                    <Text style={styles.header}>Pick your location and preferences</Text>
                </View>
                <View style={styles.InputContainer}>
                    <CardSection style={styles.InputStyling}>
                        <TextInput
                            style={{ flex: 1, fontSize: 18, paddingLeft: 10 }} 
                            label="City"
                            placeholder="City"
                            placeholderTextColor="#808080"
                            onChangeText={c => this.setCity(c)}
                            value={this.props.password}
                            color="#808080"
                        />
                    </CardSection>
                </View>
                <View style={styles.InputContainer}>
                    <CardSection style={styles.InputStyling}>
                        <TextInput
                            style={{ flex: 1, fontSize: 18, paddingLeft: 10 }} 
                            label="State"
                            placeholder="State"
                            placeholderTextColor="#808080"
                            onChangeText={c => this.setLocation(c)}
                            value={this.props.password}
                            color="#808080"
                        />
                    </CardSection>
                </View>
                <View style={{justifyContent: 'center'}}>
                    <Text style={{fontSize: 15, alignSelf: 'center', fontWeight: 'bold', paddingTop: 15}}> Pick three interests! </Text>
                </View>
                <View style={{marginBottom: 100}}>
                    <ScrollView style={styles.grid}>
                        <View style={styles.row}>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(1)}
                                >
                                    <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/women1.jpg')}>
                                        <View style={this.getButtonStyle(1)}>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Women's Rights</Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(2)}
                                >
                                    <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/poverty.jpeg')}>
                                        <View style={this.getButtonStyle(2)}>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Ending Poverty</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(3)}
                                >
                                    <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/animalrights.jpeg')}>
                                        <View style={this.getButtonStyle(3)}>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Animal Rights</Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(4)}
                                >
                                    <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/education.jpg')}>
                                        <View style={this.getButtonStyle(4)}>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Education</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(5)}
                                >
                                    <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/firstresponders.png')}>
                                        <View style={this.getButtonStyle(5)}>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>First Responders</Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(6)}
                                >
                                    <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/veterans.jpeg')}>
                                        <View style={this.getButtonStyle(6)}>
                                        </View>
                                    </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Veterans</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(7)}
                                >   
                                <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/museums.jpeg')}>
                                    <View style={this.getButtonStyle(7)}>
                                    </View>
                                </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Museums</Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(8)}
                                >
                                <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/cleanup.jpeg')}>
                                    <View style={this.getButtonStyle(8)}>
                                    </View>
                                </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>LGBTQ</Text>
                            </View>
                        </View>  
                        <View style={styles.row}>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(9)}
                                >
                                <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/CancerRes.jpg')}>
                                    <View style={this.getButtonStyle(9)}>
                                    </View>
                                </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Fighting Cancer</Text>
                            </View>
                            <View>
                                <TouchableHighlight
                                    underlayColor='transparent'
                                    onPress={() => this.toggleIds(10)}
                                >
                                <ImageBackground imageStyle={{borderRadius: 10}} style={styles.img} source={require('../Images/naturalDisaster.jpg')}>
                                    <View style={this.getButtonStyle(10)}>
                                    </View>
                                </ImageBackground>
                                </TouchableHighlight>
                                <Text style={styles.imgTxt}>Disaster Relief</Text>
                            </View>
                        </View>
                    </ScrollView>  
                </View>
                <View
                    style={styles.footer}
                >
                    <TouchableHighlight
                        underlayColor='rgb(226, 118, 141)'                                            
                        style={styles.button}
                        onPress={this.sendSurvey.bind(this)}
                    >
                        <Text
                            style={styles.buttonText}
                        > Finish Survey </Text>
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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        paddingTop: 20
    },
    header: {
        paddingTop: 5,
        marginBottom: 7.5,
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'System',
        fontWeight: 'bold',
    },
    grid: {
        margin: 20,
        height: '61.5%',
        //borderWidth: 2,
        //borderColor: 'red',
    },
    InputStyling: {
        borderBottomWidth: 0,
        padding: 15,
        borderRadius: 15,
        backgroundColor: 'rgba(200, 200, 200, .6)',
        borderColor: 'grey',
        flexDirection: 'row',
    },
    InputContainer: {
        paddingTop: 20,
        paddingRight: 15,
        paddingLeft: 15,
    },
    img: {
        height: 100,
        width: 100,
        borderRadius: 10
    },
    imgSelected: {

    },
    footer: {
        backgroundColor: 'rgba(246, 246, 246, 0.98)',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 20,
        //borderWidth: 2,
        //borderColor: 'green',
    },
    button: {
        backgroundColor: '#FF7C93',
        margin: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    check: {
        fontSize: 100,
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    imgTxt: {
        marginTop: 5,
        alignSelf: 'center',
        color: '#FF7C93',
        fontWeight: 'bold',        
    },
};


export default Survey;
