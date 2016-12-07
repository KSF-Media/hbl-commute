'use strict';
import React, { Component } from 'react';
import {
	AppRegistry,
	ListView,
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	View
} from 'react-native';
import SwipeListView from './SwipeListView';
import * as GLOBAL from '../Globals';
import Icon from 'react-native-vector-icons/FontAwesome';

const heartIcon = (<Icon name="heart" size={ 30 } color={ GLOBAL.COLOR.POSITIVE } />);
const timesIcon = (<Icon name="times" size={ 30 } color={ GLOBAL.COLOR.NEGATIVE } />);
const starIcon = (<Icon name="star" size={ 30 } color={ GLOBAL.COLOR.HIGHLIGHT } />);

export default class ArticlesSwipeListView extends Component {

	constructor(props) {
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			basic: true,
			listViewData: this.props.articles,
			deletingLeft: false,
			deletingRight: false
		};
	}

	onRowDeleteLeft(secId, rowId, rowMap) {
		this.deleteRow(secId, rowId, rowMap);
	}

	onRowDeleteRight(secId, rowId, rowMap) {
		this.deleteRow(secId, rowId, rowMap);
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

	_renderVisibleRow(article) {
		return (
			<TouchableHighlight
				onPress={ _ => console.log(article) }
				style={ styles.articleFront }
				underlayColor={ GLOBAL.COLOR.GREY_BACKGROUND }>
				<View>
					<Text style={ styles.articleTitle }>{article.title}</Text>
				</View>
			</TouchableHighlight>
		)
	}

	_renderHiddenRow() {
		console.log("DELETING LEFT: " + this.state.deletingLeft);
		console.log("DELETING RIGHT: " + this.state.deletingRight);
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
		marginBottom: 10
	},

	articleFront: {
		backgroundColor: 'white',
		height: GLOBAL.SIZE.ARTICLE_ITEM_HEIGHT,
		borderColor: GLOBAL.COLOR.GREY_BACKGROUND,
		margin: 10,
		borderRadius: 4,
	},

	articleTitle: {
		fontFamily: 'Merriweather',
		fontSize: 16,
		letterSpacing: 0,
		padding: 10
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