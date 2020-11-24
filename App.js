/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ImagePicker from 'react-native-image-crop-picker';
import { Surface } from 'gl-react-native';
import ImageFilters from 'react-native-gl-image-filters';


export default  App = ()=> {
  const save = async () => {
    if (!image) return;
 
    const result = await this.image.glView.capture();
    console.warn(result);
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  };
 
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          take pic from camera, select from gallery and make changes on picture.
        </Text>
        <Surface
        style={{width:300, height:300}}
          ref={ref => (image = ref)}
        >
          <ImageFilters
            width={300}
            height={300}
            temperature={10000}
            sharpen={1}
            hue={0.1}
            blur={0.1}
          >
            {{ uri: 'https://scontent.ftun1-2.fna.fbcdn.net/v/t1.0-9/126524627_230954611780541_7599699915455021191_o.jpg?_nc_cat=1&ccb=2&_nc_sid=8bfeb9&_nc_ohc=livFer2UPMIAX8867jK&_nc_ht=scontent.ftun1-2.fna&oh=0b2530c65aad000612afb551cc2f8a7f&oe=5FE43A6D'}}
          </ImageFilters>
        </Surface>
        <Button title="Save" onPress={save} />
        <Text>Select pic from gallery</Text>
        <Button
          title="open camera"
          onPress={takePhotoFromCamera}
         />
         <Text>Select pic from gallery</Text>
         <Button
          title="open gallery"
          onPress={choosePhotoFromLibrary}
         />
      </View>
    );
  }

 
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
  }
});

//const App: () => React$Node = () => {



  {/*const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });
  };
*/}

  
//export default App;

/**
 * 
 * <>
      <View>
        <Text>Houssem Bahri</Text>
        <Button
          title="open camera"
          onPress={takePhotoFromCamera}
         />
         <Text>taraji ya dawla ok</Text>
         <Button
          title="open galerie"
          onPress={choosePhotoFromLibrary}
         />
      </View>
    </>
 */
