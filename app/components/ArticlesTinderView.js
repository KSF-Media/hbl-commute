'use strict';
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { TruncateString } from '../helpers/Functions';
import { TimestampToHoursAndMinutes } from '../helpers/Functions';
import * as GLOBAL from '../Globals';

export default class ArticlesTinderView extends Component {

	constructor(props) {
		super(props);
		this.parent = props.parent;
		this.state = {
			cards: props.articles
		};
	}

	closeView() {

	}

	_renderCard(article) {
		return (
			<View style={ styles.card }>
				<Text style={ styles.articleTitle }>{ article.title }</Text>
				<View style={ styles.articleMainTagAndPublishedAt }>
					<Text style={ styles.articleMainTag }>{ article.mainTag }</Text>
					<Text style={ styles.articlePublishedAt }>{ TimestampToHoursAndMinutes(article.publishedAt) }</Text>
				</View>
				<Text style={ styles.articleLeadIn }>{ article.leadIn }</Text>
				<Text style={ styles.articleContent }>{ TruncateString(article.content, 300)  }</Text>

				<Text style={ styles.articleExternalUrl }>LÄS HELA NYHETEN PÅ HBL.FI</Text>
			</View>
		)
	}

	render() {
		return (
			<SwipeCards
				containerStyle={ styles.container }
				cards={ this.state.cards }

				renderCard={ (article) => this._renderCard(article) }
				renderNoMoreCards={ () => this.closeView() }

				handleYup={ (article) => this.parent.onRowDeleteLeft(article.secId, article.rowId, article.rowMap, article.uuid) }
				handleNope={ (article) => this.parent.onRowDeleteRight(article.secId, article.rowId, article.rowMap, article.uuid) }
			/>
		)
	}

}

const cardWidth = Dimensions.get('window').width - 35;
const styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND
	},

	card: {
		flex: 1,
		width: cardWidth,
		marginTop: 50,
		backgroundColor: 'white',
		padding: 10,
		margin: 10,
		marginBottom: 20,
		shadowColor: "#000000",
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: {
			height: 2,
			width: 0
		}
	},

	articleTitle: {
		fontFamily: 'Merriweather',
		fontSize: 22,
		padding: 0,
		letterSpacing: 0,
		marginBottom: 15,
	},

	articleMainTagAndPublishedAt: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginBottom: 15,
	},

	articleMainTag: {
		backgroundColor: '#333333',
		color: 'white',
		textAlign: 'center',
		fontSize: 10,
		padding: 2,
		paddingLeft: 5,
		paddingRight: 5,
		marginRight: 10,
		fontWeight: '500',
	},

	articlePublishedAt: {
		color: '#333333',
		fontSize: 10,
		paddingTop: 2
	},

	articleLeadIn: {
		fontFamily: 'Roboto',
		fontSize: 18,
		marginBottom: 15
	},

	articleContent: {
		fontFamily: 'Roboto',
		fontSize: 16,
		marginBottom: 15
	},

	articleExternalUrl: {
		textDecorationLine: "underline",
		textDecorationStyle: "solid",
		textDecorationColor: "#333",
		fontWeight: '500'
	}

});