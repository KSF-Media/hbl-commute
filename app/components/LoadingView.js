'use strict';
import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	ActivityIndicator
} from 'react-native';

class LoadingView extends Component {

	render() {
		return (
			<ActivityIndicator
				animating={ true }
				style={[styles.centering, { height: 700 }]}
				size="large"
			/>
		);
	}

}

const styles = StyleSheet.create({
	centering: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	gray: {
		backgroundColor: '#cccccc',
	},
	horizontal: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 8,
	},
});

module.exports = LoadingView;