import React, { Component } from 'react';
import { View, Text ,Button,StyleSheet} from 'react-native';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
       <Button title="Sign in" onPress={()=>this.props.navigation.navigate('SignIn')}/>
        <Button title="Sign Up" onPress={()=>this.props.navigation.navigate('SignUp')}/>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
