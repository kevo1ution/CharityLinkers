import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from './Card';
import ImgToBase64 from 'react-native-image-base64';
import Actions from 'react-native-router-flux';
class Next extends Component {
    state = {item: []}
    componentWillMount() {
        fetch()
        ImgToBase64.getBase64String(this.props.image.uri)
        .then(base64string => {
            fetch('http://ec2-18-191-151-255.us-east-2.compute.amazonaws.com:8080/image', {
                method: 'post',
                headers: { 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({
                    'image': base64string
                })
            }).then(resp => {
                console.log(resp);

            }).catch(err => {
                console.log(err);
            })
        });
    }

    render() {
        return (
            <View
                style={styles.temp}
            >
                <View style={styles.headerWrap}>
                    <Text
                        style={styles.header}
                    >We detected you have <Text style={{color: '#FF7C93'}}>{this.state.item}</Text> </Text>
                </View>
                <ScrollView style={{width: '100%'}}>
                    <Card
                        name='American Red Cross'
                        mission='a standard mission lorem ipsum'
                        address='123 sesame st'
                        website='www.sesame.com'
                        email='abc@gmail.com'
                        phone='123456789'
                        needs='water bottle'
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
                {/* <Text> {this.props.image.uri} </Text>
                <Image 
                    source={{uri: this.props.image.uri}}
                    style={{ height: 20, width: 20}}
                /> */}
            </View>
        );
    }
}

const styles = {
    headerWrap: {
        color: 'white',
        width: '100%',
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        paddingTop: 20,
        elevation: 1,
    },
    temp: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        borderBottomWidth: 10,
        borderBottomColor: 'black',
    },
    header: {
        paddingTop: 40,
        marginLeft: 15,
        marginBottom: 7.5,
        fontSize: 40,
        fontFamily: 'System',
        fontWeight: 'bold',
    },
};

export default Next;
