import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './Card';

class Home extends Component {
    state = {Cards: []}
 
    componentWillMount() {
        console.log(this.props);
        
        for (let i = 0; i < this.props.data.results.length && i < 10; i++) {
            const curr = this.props.data.results[i];
            this.state.Cards.push({
                name: curr.organization_name,
                mission: curr.mission,
                address: curr.address_line_1,
                website: curr.website_url,
                email: curr.contact_url,
            })
        }
    }
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
                        { this.state.Cards[0] ? <Card
                            name={this.state.Cards[0].name}
                            mission={this.state.Cards[0].mission}
                            address={this.state.Cards[0].address}
                            website={this.state.Cards[0].website}
                            email={this.state.Cards[0].email}
                        /> : null}
                        { this.state.Cards[1] ? <Card
                            name={this.state.Cards[1].name}
                            mission={this.state.Cards[1].mission}
                            address={this.state.Cards[1].address}
                            website={this.state.Cards[1].website}
                            email={this.state.Cards[1].email}
                        /> : null}
                        {this.state.Cards[2] ? <Card
                             name={this.state.Cards[2].name}
                             mission={this.state.Cards[2].mission}
                             address={this.state.Cards[2].address}
                             website={this.state.Cards[2].website}
                             email={this.state.Cards[2].email}
                        /> : null}
                        {this.state.Cards[3] ? <Card
                            name={this.state.Cards[3].name}
                            mission={this.state.Cards[3].mission}
                            address={this.state.Cards[3].address}
                            website={this.state.Cards[3].website}
                            email={this.state.Cards[3].email}
                        /> : null}
                        {this.state.Cards[4] ? <Card
                            name={this.state.Cards[4].name}
                            mission={this.state.Cards[4].mission}
                            address={this.state.Cards[4].address}
                            website={this.state.Cards[4].website}
                            email={this.state.Cards[4].email}
                        /> : null}
                        {this.state.Cards[5] ? <Card
                            name={this.state.Cards[5].name}
                            mission={this.state.Cards[5].mission}
                            address={this.state.Cards[5].address}
                            website={this.state.Cards[5].website}
                            email={this.state.Cards[5].email}
                        /> : null}
                        {this.state.Cards[6] ? <Card
                            name={this.state.Cards[6].name}
                            mission={this.state.Cards[6].mission}
                            address={this.state.Cards[6].address}
                            website={this.state.Cards[6].website}
                            email={this.state.Cards[6].email}
                        /> : null}
                        {this.state.Cards[7] ? <Card
                            name={this.state.Cards[7].name}
                            mission={this.state.Cards[7].mission}
                            address={this.state.Cards[7].address}
                            website={this.state.Cards[7].website}
                            email={this.state.Cards[7].email}
                        /> : null}
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
