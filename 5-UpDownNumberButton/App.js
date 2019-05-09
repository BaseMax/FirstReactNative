import React, { Component } from 'react'
import {
	StyleSheet,
	TouchableHighlight,
	Text,
	View,
} from 'react-native'
class App extends Component {
	constructor(props) {
		super(props)
		this.state = { count: 0 }
	}
	onPressUp = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	onPressDown = () => {
		this.setState({
			count: this.state.count - 1
		})
	}
	render() {
		return (
			<View>
				<TouchableHighlight onPress={this.onPressUp}>
					<Text style={styles.buttonUp}> UP </Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.onPressDown}>
					<Text style={styles.buttonDown}> DOWN </Text>
				</TouchableHighlight>
				<View style={[styles.countContainer]}>
					<Text style={[styles.countText]}>
						{ this.state.count !== 0 ? this.state.count: null}
					</Text>
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	buttonUp: {
		backgroundColor: 'green',
		width: '100%',
		textAlign: 'center',
		borderRadius: 50,
		alignItems: 'center',
		marginTop: 100,
		padding: 15,
		fontSize: 50,
		marginBottom: 100,
	},
	buttonDown: {
		backgroundColor: 'red',
		width: '100%',
		textAlign: 'center',
		borderRadius: 50,
		alignItems: 'center',
		marginTop: 100,
		padding: 15,
		fontSize: 50,
		marginBottom: 100,
	},
	countContainer: {
		alignItems: 'center',
		padding: 10
	},
	countText: {
		color: '#FF00FF'
	}
})

export default App
