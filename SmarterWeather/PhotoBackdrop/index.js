import React, { Component } from "react";

import { Image, ImageBackground, CameraRoll } from "react-native";

import styles from "./style";

class PhotoBackdrop extends Component {
  constructor(props) {
    super(props)
    this.photoSource = null ;
  };
  componentDidMount() {
    CameraRoll.getPhotos({ first: 1, assetType: "photos" }).then(data => {
      console.warn(data);
      this.setState({ photoSource: { uri: data.edges[0].node.image.uri } });
    }, error => {
      console.warn(error);
    });
  };
  render() {
    return (
      <ImageBackground
        style={styles.backdrop}
        source={this.props.photoSource}
        resizeMode="cover"
      >
        {this.props.children}
      </ImageBackground>
    );
  }
};

export default PhotoBackdrop;
