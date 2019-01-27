import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image, TextInput } from 'react-native';
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
            ids: {1: false, 2: false, 3: false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false, 10:false}
        }
    }
    
    setCity(input) {
        this.state.city = input;
    }

    setState(input) {
        this.state.state = input;
    }

    toggleIds(id) {
        if (this.state.ids[id]) this.state.ids[id] = false;
        else this.state.ids[id] = true;
        if (1) {
            this.setState({1: false});
            console.log(this.state.ids[1]);
        }
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
                            onChangeText={c => this.setState(c)}
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
                        {this.state.ids[1] ? <Icon type='FontAwesome' name='check' style={styles.check}/>:null}
                        <View style={styles.row}>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(1)}
                            >
                                <Image style={styles.img} source={require('../Images/women1.jpg')}/>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(2)}
                            >
                            <Image style={styles.img} source={require('../Images/poverty.jpeg')}/>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(3)}
                            >
                            <Image style={styles.img} source={require('../Images/animalrights.jpeg')}/>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(4)}
                            >
                            <Image style={styles.img} source={require('../Images/education.jpg')}/>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(5)}
                            >
                            <Image style={styles.img} source={require('../Images/firstresponders.png')}/>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(6)}
                            >
                            <Image style={styles.img} source={require('../Images/veterans.jpeg')}/>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(7)}
                            >   
                            <Image style={styles.img} source={require('../Images/museums.jpeg')}/>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(8)}
                            >
                            <Image style={styles.img} source={require('../Images/cleanup.jpeg')}/>
                            </TouchableHighlight>
                        </View>  
                        <View style={styles.row}>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(9)}
                            >
                            <Image style={styles.img} source={require('../Images/CancerRes.jpg')}/>
                            </TouchableHighlight>
                            <TouchableHighlight
                                underlayColor='transparent'
                                onPress={() => this.toggleIds(10)}
                            >
                            <Image style={styles.img} source={require('../Images/naturalDisaster.jpg')}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>  
                </View>
                <View
                    style={styles.footer}
                >
                    <TouchableHighlight
                        underlayColor='rgb(226, 118, 141)'                                            
                        style={styles.button}
                        onPress={() => Actions.home()}
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
    }
};


export default Survey;
