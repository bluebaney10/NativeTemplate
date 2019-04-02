/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

//import List from './List'
//import ScrollViewExample from './scroll_view.js';
//import HttpExample from './http_example.js'
//import ModalExample from './modal_example.js'
//import ActivityIndicatorExample from './activity_indicator_example.js'
//import AlertExample from './alert_example.js'
//import Animations from './Animations.js'
//import Animations from './Animations.js'
//import AppProps from './AppProps.js'
//import PickerExample from './PickerExample.js'
//import SwitchContainner from './SwitchContainner.js'
//import StatusBarContainer from './StatusBar.js'
//import GeolocationExample from './geolocation_example.js'
import AsyncStorageExample from './async_storage_example.js'
//import ProgressContainner from './ProgressContainner.js'
//import SplashScreen from './SplashScreen.js'









const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
	
//class App extends Component{
	
	/*
  constructor(props) {
  super(props);

  this.state = { isLoading: true }
}*/
	
  render() {
    
	/*
	if (this.state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        Reload the App to see a splash screen
      </Text>
    </View>
  )*/
  
	
	
	return (
		    
			<AsyncStorageExample/>
    )
	
	/*
	 return (
		 <List/>   //success
		 <ScrollViewExample/>   //success
		 <HttpExample/>   //fail
		 <ModalExample/> //success popup
		 <ActivityIndicatorExample/> // success preload circle
		 <AlertExample/> //success  default popup
		 <Animations/> //success  animate box to bigger width and height
		 <AppProps/>   //fail
		 <PickerExample/>   //success List select
		 <SwitchContainner/> // success iphone button switch
		 <StatusBarContainer/>  //fail not show in android emulator
		 <GeolocationExample/> // fiil app dont have the permission to access location
		 <AsyncStorageExample/>// success store data whe reload
		 <ProgressContainner/>// fail
    )*/
  }
}

//export default App 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
