import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends Component {
    render() {
        return (
            <View style={styles.ViewContainer}>
                <View>
                    <TouchableHighlight
                        onPress={() => Actions.camera()}
                    >
                    <Text>First Name</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text>Last Name</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    ViewContainer: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .0)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderRadius: 3,
        alignSelf: 'center',
        flex: 1,
        paddingBottom: 30
    },
    ButtonSaveStyling: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'green',
        marginLeft: 5,
        marginRight: 5
    },
        discardContainer: {
        position: 'absolute',
        top: 60,
        left: 30,
        right: 30,
        bottom: 60,
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 3,
        justifyContent: 'center',
        alignContent: 'center'
    },
    DiscButtonContainer: {
        marginLeft: 20,
        marginRight: 20,
        flex: 1
    }
};


export default Home;
