import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Card } from './Card';
import ImgToBase64 from 'react-native-image-base64';
import Actions from 'react-native-router-flux';
class Next extends Component {
    itemsDetected = "";
    data = {results: []};
    componentWillMount() {
        fetch()
        ImgToBase64.getBase64String(this.props.image.uri)
        //ImgToBase64.getBase64String('../Images/50525_FEA.jpg')
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
            }).then(res => res.json()).then(data2 => {
                console.log(data2);
                for (let i = 0; i < data2.results.length; i++) {
                    this.data.results.push(data2.results[i]);
                }
                /*
                for (let i = 0; i < data2.items.length; i++) {
                    if (i == data2.items.length-2) {
                        this.itemsDetected += data2.items[i] + " and ";
                    } else if (i == data2.items.length-1) {
                        this.itemsDetected += data2.items[i];
                    } else {
                        this.itemsDetected += data2.items[i] + ", ";
                    }
                }*/
                if (data2.items[0]) {
                    this.itemsDetected += 'water bottle';
                    if (data2.items[1]) {
                        this.itemsDetected += ' and clothes';
                    }
                } else if (data2.items[1]) {
                    this.itemsDetected += 'clothes';
                }
                this.setState({'a':0})
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
                    >These nonprofits want your <Text style={{color: '#FF7C93'}}>{this.itemsDetected}</Text> </Text>
                </View>
                <ScrollView style={{width: '100%'}}>
                    {this.data.results[0] ? <Card
                        name={this.data.results[0].organization_name}
                        mission={this.data.results[0].mission}
                        address={this.data.results[0].address_line_1}
                        website={this.data.results[0].website_url}
                        email={this.data.results[0].contact_email}
                        needs={this.data.results[0].item}
                    /> : null}
                    {this.data.results[1] ? <Card
                        name={this.data.results[1].organization_name}
                        mission={this.data.results[1].mission}
                        address={this.data.results[1].address_line_1}
                        website={this.data.results[1].website_url}
                        email={this.data.results[1].contact_email}
                        needs={this.data.results[1].item}
                    /> : null}
                    {this.data.results[2] ? <Card
                        name={this.data.results[2].organization_name}
                        mission={this.data.results[2].mission}
                        address={this.data.results[2].address_line_1}
                        website={this.data.results[2].website_url}
                        email={this.data.results[2].contact_email}
                        needs={this.data.results[2].item}
                    /> : null}
                    {this.data.results[3] ? <Card
                        name={this.data.results[3].organization_name}
                        mission={this.data.results[3].mission}
                        address={this.data.results[3].address_line_1}
                        website={this.data.results[3].website_url}
                        email={this.data.results[3].contact_email}
                        needs={this.data.results[3].item}
                    /> : null}
                    {this.data.results[4] ? <Card
                        name={this.data.results[4].organization_name}
                        mission={this.data.results[4].mission}
                        address={this.data.results[4].address_line_1}
                        website={this.data.results[4].website_url}
                        email={this.data.results[4].contact_email}
                        needs={this.data.results[4].item}
                    /> : null}
                    {this.data.results[5] ? <Card
                        name={this.data.results[5].organization_name}
                        mission={this.data.results[5].mission}
                        address={this.data.results[5].address_line_1}
                        website={this.data.results[5].website_url}
                        email={this.data.results[5].contact_email}
                        needs={this.data.results[5].item}
                    /> : null}
                    {this.data.results[6] ? <Card
                        name={this.data.results[6].organization_name}
                        mission={this.data.results[6].mission}
                        address={this.data.results[6].address_line_1}
                        website={this.data.results[6].website_url}
                        email={this.data.results[6].contact_email}
                        needs={this.data.results[6].item}
                    /> : null}
                    {this.data.results[7] ? <Card
                        name={this.data.results[7].organization_name}
                        mission={this.data.results[7].mission}
                        address={this.data.results[7].address_line_1}
                        website={this.data.results[7].website_url}
                        email={this.data.results[7].contact_email}
                        needs={this.data.results[7].item}
                    /> : null}
                    {this.data.results[8] ? <Card
                        name={this.data.results[8].organization_name}
                        mission={this.data.results[8].mission}
                        address={this.data.results[8].address_line_1}
                        website={this.data.results[8].website_url}
                        email={this.data.results[8].contact_email}
                        needs={this.data.results[8].item}
                    /> : null}
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
        fontSize: 30,
        fontFamily: 'System',
        fontWeight: 'bold',
    },
};

export default Next;
