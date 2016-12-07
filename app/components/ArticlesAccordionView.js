'use strict';
import React, { Component } from 'react';
import Accordion from 'react-native-collapsible/Accordion';
import * as Animatable from 'react-native-animatable';
import {
	View,
	StyleSheet,
	Dimensions,
	Image,
	Text,
} from 'react-native';

class ArticlesAccordionView extends Component {

	_renderHeader(article, index, isActive) {
		return (
			<Animatable.View
				duration={ 300 }
				transition="backgroundColor"
				style={( isActive ? styles.headerActive : styles.header )}>
				<Text style={ styles.articleTitle}>{ article.title }</Text>
				<Text style={ styles.articleCaption}>{ article.caption }</Text>
			</Animatable.View>
		);
	}

	_renderContent(article, i, isActive) {
		return (
			<Animatable.View
				style={ styles.articleContent }
				duration={ 300 }
				easing="ease-out"
				animation={ isActive ? 'slideInDown' : '' }>
				<Image
					style={ styles.articleImage }
					source={{ uri: article.imageUrl }}
				/>
				<Text style={ styles.articleContentText }>{ article.content }</Text>
			</Animatable.View>
		);
	}

	render() {
		return (
			<Accordion
				sections={ this.props.articles }
				underlayColor="#f7f5f3"
				renderHeader={this._renderHeader}
				renderContent={this._renderContent}
			/>
		);
	}
}

const imageWidth = Dimensions.get('window').width - 35;
const imageHeight = imageWidth * 0.5638606676;

const styles = StyleSheet.create({

	header: {
		backgroundColor: 'white',
		padding: 10,
		margin: 10,
		marginLeft: 25,
		marginBottom: 0,
	},

	headerActive: {
		backgroundColor: 'white',
		padding: 10,
		margin: 10,
		marginLeft: 25,
		marginBottom: 0,
	},

	articleTitle: {
		fontFamily: 'Merriweather',
		fontSize: 28,
		letterSpacing: 0,
		marginBottom: 10,
	},

	articleCaption: {
		fontSize: 18,
		fontFamily: 'Roboto'
	},

	articleImage: {
		marginLeft: -10,
		marginBottom: 10,
		width: imageWidth,
		height: imageHeight
	},

	articleContent: {
		flex: 1,
		margin: 10,
		marginTop: 0,
		marginLeft: 25,
		padding: 10,
		paddingTop: 5,
		backgroundColor: 'white',
	},

	articleContentText: {
		fontSize: 16
	}

});

module.exports = ArticlesAccordionView;