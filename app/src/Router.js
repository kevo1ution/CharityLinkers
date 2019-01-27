import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Home from './components/Home';
import Next from './components/Next';
import CameraComponent from './components/Camera';

const RouterComponent = () => {
  return (

    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="home" component={Home} title="Home" hideNavBar />
            <Scene key="next" component={Next} title="Next" hideNavBar />
            <Scene key="camera" component={CameraComponent} title="Camera" hideNavBar />
        </Scene>
    </Router>
  );
};


export default RouterComponent;
