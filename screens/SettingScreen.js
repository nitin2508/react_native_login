import React, { Component } from 'react';
import { View, Text ,StyleSheet,Button,AsyncStorage} from 'react-native';

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  signOut = async()=>{
    AsyncStorage.clear();
    this.props.navigation.navigate('AuthLoading');
}

  render() {
    return (
      <View style={styles.container}>
       <Button title="Sign Out" onPress={this.signOut}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });