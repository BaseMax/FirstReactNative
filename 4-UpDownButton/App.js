import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const App = () => {
	return (
		<View>
			<Text style={styles.textUp}>UP</Text>
			<Text style={styles.textDown}>DOWN</Text>
		</View>
	)
}
const styles = StyleSheet.create ({
	textUp: {
		backgroundColor: 'green',
		width: '100%',
		textAlign: 'center',
		borderRadius: 50,
		alignItems: 'center',
		marginTop: 100,
		padding: 25,
		fontSize: 50,
		marginBottom: 100,
	},
	textDown: {
		backgroundColor: 'red',
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

export default App
