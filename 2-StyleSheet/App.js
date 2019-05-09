import React from 'react'
import { Text, StyleSheet } from 'react-native'

const App = () => {
	return (
		<Text style = {styles.text}>Hello, World!</Text>
	)
}
export default App

const styles = StyleSheet.create ({
	text: {
		backgroundColor: '#4ba37b',
		width: '100%',
		textAlign: 'center',
		borderRadius: 50,
		alignItems: 'center',
		marginTop: 100,
		padding: 25,
		fontSize: 50,
		marginBottom: 100,
	}
})
