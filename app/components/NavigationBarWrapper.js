'use strict';
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import * as GLOBAL from '../Globals';

class NavigationBarWrapper extends Component {
	render() {

		var statusBarStyle = { style: "light-content" };

		var titleConfig = this.props.title || {};
		titleConfig.tintColor = "white";

		var leftButtonConfig = {};
		if(this.props.leftButton) {
			leftButtonConfig = this.props.leftButton;
			leftButtonConfig.tintColor = "white";
		} else {
			leftButtonConfig.title = "";
		}

		var rightButtonConfig = {};
		if(this.props.rightButton) {
			rightButtonConfig = this.props.rightButton;
			rightButtonConfig.tintColor = "white";
		} else {
			leftButtonConfig.title = "";
		}

		return (
			<NavigationBar
				tintColor={ GLOBAL.COLOR.HBL_HEADER }
				statusBar={ statusBarStyle }
				title={ titleConfig }
				leftButton={ leftButtonConfig }
				rightButton={ rightButtonConfig } />
		)
	}

}

module.exports = NavigationBarWrapper;