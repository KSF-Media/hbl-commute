'use strict';
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Animated
} from 'react-native';
import * as Animatable from 'react-native-animatable';

class TransportationInfoView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fadeAnim: new Animated.Value(0)
		};
	}

	componentDidMount() {
		Animated.timing(
			this.state.fadeAnim,
			{
				toValue: 1,
				delay: 1000
			}
		).start();
	}

	render() {
		return (
			<View style={ styles.transportationInfo }>
				<View style={ styles.transportationInfoLine }>
					<Animatable.View
						animation={ slideRightAnimation(0) }
						easing="linear"
						duration={ (60 * 1000) }
						style={ [styles.transportationInfoVehicle, styles.transportationInfoTrain, { left: 0 }, { opacity: this.state.fadeAnim }] }>
						<Text style={ styles.transportationInfoText }>P</Text>
					</Animatable.View>
					<Animatable.View
						animation={ slideRightAnimation(20) }
						easing="linear"
						duration={ (60 * 1000) }
						style={ [styles.transportationInfoVehicle, styles.transportationInfoTram, { left: 20 }, { opacity: this.state.fadeAnim }] }>
						<Text style={ styles.transportationInfoText }>6T</Text>
					</Animatable.View>
					<Animatable.View
						animation={ slideRightAnimation(30) }
						easing="linear"
						duration={ (60 * 1000) }
						style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { left: 30 }, { opacity: this.state.fadeAnim }] }>
						<Text style={ styles.transportationInfoText }>42</Text>
					</Animatable.View>
					<Animatable.View
						animation={ slideRightAnimation(45) }
						easing="linear"
						duration={ (60 * 1000) }
						style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { left: 45 }, { opacity: this.state.fadeAnim }] }>
						<Text style={ styles.transportationInfoText }>54</Text>
					</Animatable.View>
					<Animatable.View
						animation={ slideRightAnimation(100) }
						easing="linear"
						duration={ (60 * 1000) }
						style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { left: 100 }, { opacity: this.state.fadeAnim }] }>
						<Text style={ styles.transportationInfoText }>785B</Text>
					</Animatable.View>
					<Animatable.View
						animation={ slideRightAnimation(120) }
						easing="linear"
						duration={ (60 * 1000) }
						style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { left: 120 }, { opacity: this.state.fadeAnim }] }>
						<Text style={ styles.transportationInfoText }>785B</Text>
					</Animatable.View>
				</View>
				<Text style={ styles.transportationInfoStop }>0313</Text>
			</View>
		);
	}

}

function slideRightAnimation(fromValue) {
	return {
		from: {
			['translateX']: fromValue,
		},
		to: {
			['translateX']: Dimensions.get('window').width-fromValue-50,
		},
	};
}

const trainColor = '#8c4799';
const tramColor = '#00985f';
const busColor = '#007ac9';
const styles = StyleSheet.create({

	transportationInfo: {
		height: 30,
		backgroundColor: 'white',
		position: 'absolute',
		top: 64,
		right: 0,
		left: 0,
		width: Dimensions.get('window').width,
		zIndex: 1,
		shadowColor: "#000000",
		shadowOpacity: 0.1,
		shadowRadius: 2,
		shadowOffset: {
			height: 3,
			width: 0
		}
	},

	transportationInfoLine: {
		height: 2,
		width: Dimensions.get('window').width-10,
		backgroundColor: '#dddddd',
		position: 'absolute',
		top: 14,
		bottom: 0,
		left: 0
	},

	transportationInfoStop: {
		minWidth: 30,
		backgroundColor: 'white',
		position: 'absolute',
		right: 10,
		top: 4,
		borderColor: '#dddddd',
		borderWidth: 1,
		paddingLeft: 3,
		paddingRight: 3,
		paddingTop: 2,
		textAlign: 'center'
	},

	transportationInfoVehicle: {
		height: 19,
		minWidth: 13,
		borderRadius: 19,
		paddingLeft: 3,
		paddingRight: 3,
		position: 'absolute',
		top: -9
	},

	transportationInfoTrain: {
		backgroundColor: trainColor,
	},

	transportationInfoTram: {
		backgroundColor: tramColor,
	},

	transportationInfoBus: {
		backgroundColor: busColor,
	},

	transportationInfoText: {
		backgroundColor: 'transparent',
		color: 'white',
		textAlign: 'center',
		height: 19,
		minWidth: 13,
		borderRadius: 19,
		lineHeight: 19,
		paddingLeft: 3,
		paddingRight: 3,
		fontSize: 10,
		fontWeight: '600'
	}

});

module.exports = TransportationInfoView;