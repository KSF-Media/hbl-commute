'use strict';
import React, { Component } from 'react';
import {
	AppRegistry,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View,
	Modal,
	Navigator
} from 'react-native';
import SwipeListView from './SwipeListView';
import ScrollViewContainer from './ScrollViewContainer';
import ModalWrapper from './ModalWrapper';
import * as GLOBAL from '../Globals';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TriggerEvent} from '../helpers/Events';

const heartIcon = (<Icon name="heart" size={ 30 } color={ GLOBAL.COLOR.POSITIVE } />);
const timesIcon = (<Icon name="times" size={ 30 } color={ GLOBAL.COLOR.NEGATIVE } />);
const starIcon = (<Icon name="star" size={ 30 } color={ GLOBAL.COLOR.HIGHLIGHT } />);

var Routes = {
	modal: {
	component: ModalWrapper
	}
}

export default class ArticlesSwipeListView extends Component {

	constructor(props) {
		super(props);
		this.positiveIcon = this.props.useStarIcon ? starIcon : heartIcon;
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			basic: true,
			listViewData: this.props.articles,
			readArticles: global.readArticles || []
		};
	}

	onRowDeleteLeft(secId, rowId, rowMap) {
		this.deleteRow(secId, rowId, rowMap);
		TriggerEvent({ Event:'articleDeleted', Uuid:'Test', deviceUuid: GLOBAL.deviceInfo.deviceUID, deviceDetails:GLOBAL.deviceInfo.deviceDetails });
	}

	onRowDeleteRight(secId, rowId, rowMap) {
		this.deleteRow(secId, rowId, rowMap);
		TriggerEvent({ Event:'articleSaved', Uuid:'Test', deviceUuid: GLOBAL.deviceInfo.deviceUID, deviceDetails:GLOBAL.deviceInfo.deviceDetails });
	}

	deleteRow(secId, rowId, rowMap) {
		const newData = [...this.state.listViewData];
		var row = rowMap[`${secId}${rowId}`],
			self = this;
		row.animateUpHiddenRow();
		setTimeout(function(){
			row.resetRow();
			newData.push(newData[0]); // ToDo: Push new item, not the first of the list
			self.setState({ listViewData: newData });
		}, 300);
	}

	articleRead(article) {
		if(!this.isArticleRead(article)) {
			var readArticles = this.state.readArticles;
			readArticles.push(article);
			this.setState({
				readArticles : readArticles
			});
			global.readArticles = readArticles;
		}

	}

	isArticleRead(article) {
		var isRead = false;
		this.state.readArticles.map(function(object) {
			if(object.uuid === article.uuid) {
				isRead = true;
				return false;
			}
		});
		return isRead;
	}

	timestampToHoursAndMinutes(timestamp) {
		var t = new Date(timestamp),
			hours = ('0' + t.getHours()).slice(-2),
			minutes = ('0' + t.getMinutes()).slice(-2);
		return hours + ":" + minutes;
	}

	_renderVisibleRow(article) {
		return (
			<TouchableHighlight
				onPress={ _ => this.articleRead(article) }
				style={ styles.articleFront }
				underlayColor={ GLOBAL.COLOR.GREY_BACKGROUND }>
				<View style={ styles.articleVisibleRow }>
					<View style={ [styles.articleReadIndicator, (this.isArticleRead(article) ? styles.articleReadIndicatorRead : '' )] }></View>
					<Text style={ [styles.articleTitle, (article.title.length > 65 ? styles.articleTitleSmall : false)] }>{ article.title }</Text>
					<View style={ styles.articleMainTagAndPublishedAt }>
						<Text style={ styles.articleMainTag }>{ (article.mainTag ? article.mainTag.toUpperCase() : false) }</Text>
						<Text style={ styles.articlePublishedAt }>{ this.timestampToHoursAndMinutes(article.publishedAt) }</Text>
					</View>
				</View>
			</TouchableHighlight>
		)
	}

	_renderHiddenRow() {
		return (
			<View style={ styles.articleBack }>
				<Text>{ this.positiveIcon }</Text>
				<Text>{ timesIcon }</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={ styles.container }>
				<ScrollViewContainer>
					{
						this.props.title ? <Text style={ styles.containerTitle }>{ this.props.title }</Text> : false
					}
					<SwipeListView
						style={ styles.swipeListViewContainer }
						dataSource={this.ds.cloneWithRows(this.state.listViewData)}
						renderRow={
							article => this._renderVisibleRow(article)
						}
						renderHiddenRow={
							article => this._renderHiddenRow()
						}
						parent = { this }
						onRowDeleteLeft={ this.onRowDeleteLeft }
						onRowDeleteRight={ this.onRowDeleteRight }
						leftDeleteValue={ 75 }
						rightDeleteValue={ -75 }
					/>
				</ScrollViewContainer>
			</View>
		);
	}

}

const styles = StyleSheet.create({

	container: {

	},

	swipeListViewContainer: {
		marginTop: 35,
		marginBottom: 75
	},

	containerTitle: {
		paddingTop: 50,
		marginBottom: -28,
		fontSize: 24,
		color: '#333333',
		textAlign: 'center',
		fontWeight: '600'
	},

	articleFront: {
		height: GLOBAL.SIZE.ARTICLE_ITEM_HEIGHT,
		padding: 10,
		paddingBottom: 0
	},

	articleReadIndicator: {
		height: 12,
		width: 12,
		backgroundColor: '#3569d2',
		position: 'absolute',
		top: 23,
		left: 15,
		borderRadius: 12,
		zIndex: 10
	},

	articleReadIndicatorRead: {
		borderWidth: 1,
		borderColor: '#3569d2',
		backgroundColor: 'white',
	},

	articleVisibleRow: {
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent: 'space-around',
		shadowColor: "#000000",
		shadowOpacity: 0.1,
		shadowRadius: 4,
		shadowOffset: {
			height: 2,
			width: 0
		}
	},

	articleTitle: {
		flex: 3,
		fontFamily: 'Roboto',
		fontSize: 16,
		letterSpacing: 0,
		padding: 10,
		paddingLeft: 40,
	},

	articleTitleSmall: {
		fontSize: 14
	},

	articleMainTagAndPublishedAt: {
		flex: 0,
		margin: 10,
		marginTop: 15
	},

	articleMainTag: {
		backgroundColor: '#333333',
		color: 'white',
		textAlign: 'center',
		fontSize: 10,
		padding: 2,
		paddingLeft: 5,
		paddingRight: 5,
		marginBottom: 5,
		fontWeight: '500',
	},

	articlePublishedAt: {
		color: '#333333',
		textAlign: 'right',
		fontSize: 10
	},

	articleBack: {
		alignItems: 'center',
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
		paddingTop: 30,
		borderRadius: 4,
	}

});
