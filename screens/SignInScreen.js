import React from 'react';
import {View, Text, Dimensions, Image, StyleSheet} from 'react-native';
import {Form, Item, Label , Input, Button} from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

export default class SignInScreen extends React.Component{

    state = {
        email: "",
        password: ""

    }
    logIn = () => {
        var email = this.state.email;
        var password = this.state.password;

        this.props.SignIn(email,password);
    }

    render(){
        return(

          <View style={{flex: 1}}>
				
					<View style={styles.inputStyle}>
						<Form>
							<Item floatingLabel>
								<Label>Email</Label>
								<Input
									autoCorrect={false}
									onChangeText={(email)=>this.setState({email})}
								/>
							</Item>
							<Item floatingLabel>
								<Label>Password</Label>
								<Input
									autoCorrect={false}
									onChangeText={(password)=>this.setState({password})}
									secureTextEntry
								/>
							</Item>
						</Form>
						<View style={{marginTop: 10}}>
							<Button
								primary
								block
								onPress={this.logIn}
							>
								<Text style={{color: 'white'}}>Sign In</Text>
							</Button>
						</View>
					</View>
				
			</View>
		)
        

    }
}
const styles = {

    inputStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: 10
    }
}