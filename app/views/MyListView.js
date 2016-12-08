'use strict';
import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Animated
} from 'react-native';
import NavigationBarWrapper from '../components/NavigationBarWrapper'
import ScrollViewContainer from '../components/ScrollViewContainer';
import ArticlesSwipeListView from '../components/ArticlesSwipeListView';
import TransportationInfoView from '../components/TransportationInfoView';
import LoadingView from '../components/LoadingView';
import * as GLOBAL from '../Globals';
import { FetchArticles } from '../helpers/Articles';

export default class MyListView extends Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.loading = true;
		this.state = {
			articles: []
		};
	}

	componentDidMount() {
		this.loading = false;
	}

	render() {
		var self = this;

		if(this.loading) {
			FetchArticles('https://rvfa2fac83.execute-api.eu-central-1.amazonaws.com/prod/getContentForUser', this);

			return (
				<View style={ styles.myListView }>
					<NavigationBarWrapper />
				</View>
			);
		} else {
			var leftButtonConfig = {
					title: '‹ Tillbaka',
					handler: function () {
						self.props.navigator.pop();
					}
				},
				rightButtonConfig = {
					title: 'Mitt arkiv',
					handler: function () {
						self.props.navigator.push(GLOBAL.ROUTES[2]);
					}
				};

			return (
				<View style={ styles.myListView }>
					<NavigationBarWrapper leftButton={ leftButtonConfig } rightButton={ rightButtonConfig }/>
					<Animated.View style={{ opacity: this.state.fadeAnim }}>
						<ArticlesSwipeListView articles={ this.state.articles }></ArticlesSwipeListView>
					</Animated.View>
					<TransportationInfoView/>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({

	myListView: {
		flex: 1,
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND
	}

});