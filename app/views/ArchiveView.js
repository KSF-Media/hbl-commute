'use strict';
import React, { Component } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';
import NavigationBarWrapper from '../components/NavigationBarWrapper'
import ScrollViewContainer from '../components/ScrollViewContainer';
import ArticlesSwipeListView from '../components/ArticlesSwipeListView';
import TransportationInfoView from '../components/TransportationInfoView';
import LoadingView from '../components/LoadingView';
import * as GLOBAL from '../Globals';
import { FetchArticles } from '../helpers/Articles';

export default class ArchiveView extends Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.loading = true;
		this.state = {
			articles: []
		};
	}

	componentDidMount() {
		this.state.loading = true;
	}

	render() {
		var self = this;

		if(this.loading) {
			FetchArticles('https://rvfa2fac83.execute-api.eu-central-1.amazonaws.com/prod/getContentForUser', this);

			return (
				<View style={ styles.archiveView }>
					<NavigationBarWrapper />
				</View>
			);
		} else {
			var leftButtonConfig = {
				title: '‹ Tillbaka',
				handler: function () {
					self.props.navigator.pop();
				}
			};

			return (
				<View style={ styles.archiveView }>
					<NavigationBarWrapper leftButton={ leftButtonConfig }/>
					<ScrollViewContainer>
						<ArticlesSwipeListView articles={ this.state.articles } title="Mitt arkiv"></ArticlesSwipeListView>
					</ScrollViewContainer>
					<TransportationInfoView/>
				</View>
			);
		}
	}
}

const styles = StyleSheet.create({

	archiveView: {
		flex: 1,
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND
	}

});