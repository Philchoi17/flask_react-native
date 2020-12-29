import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'

class StyledImage extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      imgSrc: props.imgSrc,
      imageSize: props.imageSize
    }
  }

  render() {
    return (
      <View style={ styles.imageContainer }>
        <Image 
        { ...this.props } 
        style={ [styles.image, this.state.imageSize] } 
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    margin: 25
  },  
  image: {
    resizeMode: 'contain'
  }
})

export default StyledImage