'use strict';
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Animated
} from 'react-native';
import NavigationBarWrapper from '../components/NavigationBarWrapper'
import ArticlesSwipeListView from '../components/ArticlesSwipeListView';
import TransportationInfoView from '../components/TransportationInfoView';
import LoadingView from '../components/LoadingView';
import * as GLOBAL from '../Globals';
import { FetchArticles } from '../helpers/Articles';

export default class MainView extends Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.loading = true;
		this.state = {
			articles: []
		};
	}

	render() {
		var self = this;

		if(this.loading) {
			FetchArticles('https://rvfa2fac83.execute-api.eu-central-1.amazonaws.com/prod/getContentForUser', this);

			return (
				<View style={ styles.mainView }>
					<LoadingView />
				</View>
			);
		} else {
			var rightButtonConfig = {
				title: 'Mitt läslista',
				handler: function () {
					self.props.navigator.push(GLOBAL.ROUTES[1]);
				}
			};

			return (
				<Animated.View style={ [styles.mainView, { opacity: this.state.fadeAnim }] }>
					<NavigationBarWrapper rightButton={ rightButtonConfig } />
					<ArticlesSwipeListView articles={ this.state.articles }></ArticlesSwipeListView>
					<TransportationInfoView/>
				</Animated.View>
			);
		}
	}
}

const styles = StyleSheet.create({

	mainView: {
		flex: 1,
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND
	}

});