'use strict';
import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet
} from 'react-native';

class ScrollViewContainer extends Component {

	render() {
		return (
			<ScrollView style={ styles.scrollView }>
				{ this.props.children }
			</ScrollView>
		)
	}

}

const styles = StyleSheet.create({

	scrollView: {
		backgroundColor: '#f7f5f3'
	}

});

module.exports = ScrollViewContainer;