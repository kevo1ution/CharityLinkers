import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'native-base';

class camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          captureAudio={false}
          onPictureTaken={() => Actions.next()}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ display: "flex", flexDirection: 'row', justifyContent: 'center', border: "2px solid red", width: "100%", height: "100%", zIndex: 1}}>
          <Icon type="FontAwesome" name="arrow-left" style={{ display: "flex", position: "absolute", top: "7%", right: "85%" }}
            onPress={() => {Actions.pop()}}
          />
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture} />
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      Actions.next({'image': data});
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    width: "100%"
  },
  preview: {
    display: "flex",
    height: "100%",
    width: "100%",
    paddingTop: "10%",
    paddingBottom: "10%",
    zIndex: 0
  },
  capture: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    height: 80,
    width: 80,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
    margin: 20,
    justifyContent: 'center'
  },
});

export default camera;
