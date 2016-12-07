'use strict';
import React, { Component } from 'react';
import {
	ScrollView,
	StyleSheet
} from 'react-native';
import * as GLOBAL from '../Globals';

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
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND,
	}

});

module.exports = ScrollViewContainer;