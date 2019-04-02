import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import AppPropsChild from './AppPropsChild'
import PresentationalComponent from './AppPropsChild'

export default class AppProps extends React.Component {
   state = {
      myState:'buncha satiya'
   }
   updateState = () => {
      this.setState({ myState: 'The state is updated' })
   }
   render() {
      
	  return (
         <View>
            <PresentationalComponent myState = {this.state.myState} updateState = {this.updateState}/>
         </View>
      )
	  
	  
	  
   }
}