import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Card } from './Card';
import ImgToBase64 from 'react-native-image-base64';
import Actions from 'react-native-router-flux';

class Next extends Component {

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
            <Card
                url='../Images/MusicIcon.png'
                title='American Red Cross'
                description='a standard description'
            />
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
    temp: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default Next;
