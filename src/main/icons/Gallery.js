import React, { Component } from 'react'
import { View ,Image,StyleSheet,TouchableOpacity,Animated } from 'react-native'

import { withNavigation } from 'react-navigation';

class Gallery extends Component {
  constructor () {
    super()
    this.springValue = new Animated.Value(0.4)
  }
  spring () {
    this.springValue.setValue(0.4)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction:1,
      }
    ).start()
  }
  render() {
    return (
       <View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('VR') }>
         <Animated.Image   onLayout={this.spring.bind(this)} 
         style={{ height:120,
          width:120,
          marginTop:-120,
          marginLeft:185,  
          transform: [{scale: this.springValue}] }}
          source={require('../../assests/icons/gallery.png')}
          />
      </TouchableOpacity>
       </View>
      
    )
  }
}
export default withNavigation(Gallery);
const styles = StyleSheet.create({
    icon:{
     height:120,
     width:120,
     marginTop:-120,
     marginLeft:185,  
    }
})