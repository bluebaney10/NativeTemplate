import React, { Component } from 'react'
import { Text, View } from 'react-native'


/*
export default class AppPropsChild extends React.Component {
	
	 constructor(props){
		 super(props)
	 }
	
	 return (
      <View>
         <Text onPress = {props.updateState}>
            {props.myState}
         </Text>
      </View>
   )

}*/


const PresentationalComponent = (props) => {
   return (
      <View>
         <Text onPress = {props.updateState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default PresentationalComponent
