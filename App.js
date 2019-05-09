/**
 * Sample React Native App
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to App!</Text>
				<Text style={styles.instructions}>Hey My friend!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'yellow',
	},
	welcome: {
		fontSize: 38,
		textAlign: 'center',
		margin: 20,
	},
	instructions: {
		fontSize: 25,
		textAlign: 'center',
		color: 'blue',
		marginTop: 10,
	},
});

