import React, { Component } from 'react'
import {name as appName} from './app.json';
import {
	AppRegistry,
	StyleSheet,
	TouchableHighlight,
	TextInput,
	Text,
	View,
} from 'react-native'

class App extends Component {
	constructor(props) {
		super(props)
	}
	onLogin = () => {
		// ...
	}
	render = () => {
		return (
			<View>
				<View style={styles.field}>
					<Text style={styles.field_name}>UserName : </Text>
					<TextInput textContentType="username" style={styles.field_box}/>
				</View>
				<View style={styles.field}>
					<Text style={styles.field_name}>PassWord : </Text>
					<TextInput textContentType="password" style={styles.field_box}/>
				</View>
				<TouchableHighlight onPress={this.onLogin}>
					<Text style={styles.button}>LOGIN</Text>
				</TouchableHighlight>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	button: {
		backgroundColor: 'green',
		width: '80%',
		textAlign: 'center',
		borderRadius: 50,
		marginTop: 25,
		padding: 15,
		marginLeft: '10%',
		marginRight: '10%',
		fontSize: 30,
	},
	field: {
		backgroundColor: '#e1e1e1',
		width: '100%',
		marginTop: 20,
		padding: 5,
	},
	field_name: {
		alignItems: 'center',
		padding: 5
	},
	field_box: {
		color: 'black'
	}
})

AppRegistry.registerComponent(appName, () => App);

