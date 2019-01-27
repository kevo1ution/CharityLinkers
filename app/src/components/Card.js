import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
        {/* <Image
          style={styles.imageStyle}
          source={require(props.url)}
        /> */}
        <View>
        <Text
           style={styles.titleStyle} 
        > {props.title} </Text>
        <Text
          style={styles.descStyle}
        > {props.description} </Text>
        </View>
    </View>
  );
};

const styles = {
  tytleStyle: {
    fontSize: 15,
    fontWeight: 20
  },
  imageStyle: {
    alignSelf: 'left',
    height: 200,
    width: 100
  },
  containerStyle: {
    width: '100%',
    height: 200,
    borderWidth: 1,
    borderRadius: 2,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  descStyle: {
    fontSize: 12
  }
};

export { Card };
