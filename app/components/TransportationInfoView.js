'use strict';
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';

class TransportationInfoView extends Component {

	render() {
		return (
			<View style={ styles.transportationInfoLine }>
				<Animatable.View
					animation={ slideUpAnimation(0, (Dimensions.get('window').height-64) * -1) }
					easing="linear"
					duration={ (60 * 1000) }
					style={ [styles.transportationInfoVehicle, styles.transportationInfoTrain, { top: Dimensions.get('window').height-64 }] }>
					<Text style={ styles.transportationInfoText }>P</Text>
				</Animatable.View>
				<Animatable.View
					animation={ slideUpAnimation(0, -200) }
					easing="linear"
					duration={ (60 * 1000) }
					style={ [styles.transportationInfoVehicle, styles.transportationInfoTram, { top: 200 }] }>
					<Text style={ styles.transportationInfoText }>6T</Text>
				</Animatable.View>
				<Animatable.View
					animation={ slideUpAnimation(0, -300) }
					easing="linear"
					duration={ (60 * 1000) }
					style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { top: 300 }] }>
					<Text style={ styles.transportationInfoText }>42</Text>
				</Animatable.View>
				<Animatable.View
					animation={ slideUpAnimation(0, -370) }
					easing="linear"
					duration={ (60 * 1000) }
					style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { top: 370 }] }>
					<Text style={ styles.transportationInfoText }>54</Text>
				</Animatable.View>
				<Animatable.View
					animation={ slideUpAnimation(0, -400) }
					easing="linear"
					duration={ (60 * 1000) }
					style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { top: 400 }] }>
					<Text style={ styles.transportationInfoText }>785B</Text>
				</Animatable.View>
				<Animatable.View
					animation={ slideUpAnimation(0, -400) }
					easing="linear"
					duration={ (60 * 1000) }
					style={ [styles.transportationInfoVehicle, styles.transportationInfoBus, { top: 400 }] }>
					<Text style={ styles.transportationInfoText }>785B</Text>
				</Animatable.View>
			</View>
		);
	}

}

function slideUpAnimation(fromValue, toValue) {
	return {
		from: {
			['translateY']: fromValue,
		},
		to: {
			['translateY']: toValue,
		},
	};
}

const trainColor = '#8c4799';
const tramColor = '#00985f';
const busColor = '#007ac9';
const styles = StyleSheet.create({

	transportationInfoLine: {
		width: 2,
		height: Dimensions.get('window').height-64,
		backgroundColor: '#dddddd',
		position: 'absolute',
		top: 64,
		bottom: 0,
		left: 11
	},

	transportationInfoVehicle: {
		height: 19,
		width: 19,
		borderRadius: 19,
		position: 'absolute',
		left: -8,
		top: -19
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
		width: 19,
		borderRadius: 19,
		lineHeight: 19,
		fontSize: 10,
		fontWeight: '600'
	}

});

module.exports = TransportationInfoView;