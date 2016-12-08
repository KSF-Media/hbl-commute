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
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			basic: true,
			listViewData: this.props.articles,
			deletingLeft: false,
			deletingRight: false,
			readArticles: []
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
		setTimeout(function() {
			row.animateUpHiddenRow();
			setTimeout(function(){
				row.resetRow();
				newData.push(newData[0]); // ToDo: Push new item, not the first of the list
				self.setState({ listViewData: newData });
			}, 300);
		}, 300);
	}

	articleRead(article) {
		if(!this.isArticleRead(article)) {
			var readArticles = this.state.readArticles;
			readArticles[article.id] = article;
			this.setState({
				readArticles : readArticles
			});
		}

	}

	isArticleRead(article) {
		var isRead = false;
		this.state.readArticles.map(function(object) {
			if(object.id === article.id) {
				isRead = true;
				return false;
			}
		});
		return isRead;
	}

	_renderVisibleRow(article) {
		return (
			<TouchableHighlight
				onPress={ _ => this.articleRead(article) }
				style={ styles.articleFront }
				underlayColor={ GLOBAL.COLOR.GREY_BACKGROUND }>
				<View>
					<View style={ [styles.articleReadIndicator, (this.isArticleRead(article) ? styles.articleReadIndicatorRead : '' )] }></View>
					<Text style={ styles.articleTitle }>{article.title}</Text>
				</View>
			</TouchableHighlight>
		)
	}

	_renderHiddenRow() {
		if(this.state.deletingLeft) {
			return (
				<View style={ styles.articleBack }>
					<Text>{ heartIcon }</Text>
					<Text></Text>
				</View>
			)
		} else if(this.state.deletingRight) {
			return (
				<View style={ styles.articleBack }>
					<Text></Text>
					<Text>{ timesIcon }</Text>
				</View>
			)
		} else {
			return (
				<View style={ styles.articleBack }>
					<Text>{ heartIcon }</Text>
					<Text>{ timesIcon }</Text>
				</View>
			)
		}
	}

	render() {
		return (
			<View style={ styles.container }>

				<SwipeListView
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
			</View>
		);
	}

}

const styles = StyleSheet.create({

	container: {
		marginTop: 30,
		marginBottom: 10
	},

	articleFront: {
		backgroundColor: 'white',
		height: GLOBAL.SIZE.ARTICLE_ITEM_HEIGHT,
		borderColor: GLOBAL.COLOR.GREY_BACKGROUND,
		margin: 10,
		borderRadius: 4,
	},

	articleReadIndicator: {
		height: 10,
		width: 10,
		backgroundColor: '#3569d2',
		position: 'absolute',
		top: GLOBAL.SIZE.ARTICLE_ITEM_HEIGHT / 2 - 10,
		left: 10,
		borderRadius: 10
	},

	articleReadIndicatorRead: {
		borderWidth: 2,
		borderColor: GLOBAL.COLOR.GREY_BACKGROUND,
		backgroundColor: 'white'
	},

	articleTitle: {
		fontFamily: 'Merriweather',
		fontSize: 16,
		letterSpacing: 0,
		padding: 10,
		marginLeft: 20
	},

	articleBack: {
		alignItems: 'center',
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20
	}

});
