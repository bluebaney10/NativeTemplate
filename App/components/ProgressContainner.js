import React from 'react';
import { StyleSheet, View, Dimensions,Text } from 'react-native';
//import ProgressiveImage from './ProgressiveImage';

const w = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class ProgressContainner extends React.Component {
  render() {
	   return (
	   <Text>Progress Containner</Text>
	   )
	  
	 /* 
    return (
      <View style={styles.container}>
        <ProgressiveImage
          thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
          source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${w.width * 2}&buster=${Math.random()}` }}
          style={{ width: w.width, height: w.width }}
          resizeMode="cover"
        />
      </View>
    )*/
  }
}