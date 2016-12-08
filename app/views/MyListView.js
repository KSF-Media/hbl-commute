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
import * as GLOBAL from '../Globals';

export default class MyListView extends Component {

	constructor(props) {
		super(props);
		this.props = props;

		var lorem_ipsum = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.\n\nMauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.\n\nNam molestie nec tortor. Donec placerat leo sit amet velit. Vestibulum id justo ut vitae massa. Proin in dolor mauris consequat aliquam. Donec ipsum, vestibulum ullamcorper venenatis augue. Aliquam tempus nisi in auctor vulputate, erat felis pellentesque augue nec, pellentesque lectus justo nec erat. Aliquam et nisl. Quisque sit amet dolor in justo pretium condimentum.\n\nVivamus placerat lacus vel vehicula scelerisque, dui enim adipiscing lacus sit amet sagittis, libero enim vitae mi. In neque magna posuere, euismod ac tincidunt tempor est. Ut suscipit nisi eu purus. Proin ut pede mauris eget ipsum. Integer vel quam nunc commodo consequat. Integer ac eros eu tellus dignissim viverra. Maecenas erat aliquam erat volutpat. Ut venenatis ipsum quis turpis. Integer cursus scelerisque lorem. Sed nec mauris id quam blandit consequat. Cras nibh mi hendrerit vitae, dapibus et aliquam et magna. Nulla vitae elit. Mauris consectetuer odio vitae augue.";
		this.state = {
			articles: [
				{ id: 1, title: "Två knivdödade vid skola i Norge", caption: "Två personer, en kvinna och en pojke, har avlidit efter att blivit attackerade med kniv vid en skola i Kristiansand i södra Norge.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=98cdae86-537c-43de-b672-d377b90168f1&type=preview&source=98cdae86-537c-43de-b672-d377b90168f1&function=hardcrop&width=1376&height=777&q=80', content: lorem_ipsum },
				{ id: 2, title: "Sjuårings tystnad på Twitter oroar världen", caption: "En sjuårings Twitterkonto från de rebellkontrollerade östra delarna av Aleppo lorem ipsum.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=ae950290-53de-426f-84db-d8c2d51958de&type=preview&source=ae950290-53de-426f-84db-d8c2d51958de&function=hardcrop&width=1376&height=777&q=80', content: lorem_ipsum },
				{ id: 3, title: "Valls avgår – vill bli president", caption: "Frankrikes presidentval i vår står troligen mellan högerns François Fillon och lorem ipsum dolor sit amet.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=9ef2f30a-2ed3-4d40-bd4e-7d56fca21bc7&type=preview&source=9ef2f30a-2ed3-4d40-bd4e-7d56fca21bc7&function=hardcrop&width=1376&height=897&q=80', content: lorem_ipsum },
			]
		};
	}

	render() {
		var self = this,
			leftButtonConfig = {
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
				<NavigationBarWrapper leftButton={ leftButtonConfig } rightButton={ rightButtonConfig } />
				<ScrollViewContainer>
					<ArticlesSwipeListView articles={ this.state.articles }></ArticlesSwipeListView>
				</ScrollViewContainer>
				<TransportationInfoView/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

	myListView: {
		flex: 1,
		backgroundColor: GLOBAL.COLOR.GREY_BACKGROUND
	}

});