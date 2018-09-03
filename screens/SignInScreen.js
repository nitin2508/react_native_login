import React, { Component } from 'react';
import { View, Text,StyleSheet,AsyncStorage,Button } from 'react-native';

class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  SignIn = async()=>{
    await AsyncStorage.setItem('userToken','Nitin')
    this.props.navigation.navigate('App');
  }

  render() {
    return (
      <View style={styles.container}>
       <Button title="Complete Sign in" onPress={this.SignIn}/>
      </View>
    );
  }
}

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
