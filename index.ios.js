/**
 * KSF HBL Commute
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict'
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView
} from 'react-native';
import NavigationBarWrapper from './app/components/NavigationBarWrapper'
import ScrollViewContainer from './app/components/ScrollViewContainer';
import ArticlesAccordionView from './app/components/ArticlesAccordionView';
import TransportationInfoView from './app/components/TransportationInfoView';


export default class HBLCommute extends Component {

	constructor(props) {
		super(props);

		var lorem_ipsum = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit. Sed augue orci, lacinia eu tincidunt et eleifend nec lacus. Donec ultricies nisl ut felis, suspendisse potenti. Lorem ipsum ligula ut hendrerit mollis, ipsum erat vehicula risus, eu suscipit sem libero nec erat. Aliquam erat volutpat. Sed congue augue vitae neque. Nulla consectetuer porttitor pede. Fusce purus morbi tortor magna condimentum vel, placerat id blandit sit amet tortor.\n\nMauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem. Proin interdum maecenas massa turpis sagittis in, interdum non lobortis vitae massa. Quisque purus lectus, posuere eget imperdiet nec sodales id arcu. Vestibulum elit pede dictum eu, viverra non tincidunt eu ligula.\n\nNam molestie nec tortor. Donec placerat leo sit amet velit. Vestibulum id justo ut vitae massa. Proin in dolor mauris consequat aliquam. Donec ipsum, vestibulum ullamcorper venenatis augue. Aliquam tempus nisi in auctor vulputate, erat felis pellentesque augue nec, pellentesque lectus justo nec erat. Aliquam et nisl. Quisque sit amet dolor in justo pretium condimentum.\n\nVivamus placerat lacus vel vehicula scelerisque, dui enim adipiscing lacus sit amet sagittis, libero enim vitae mi. In neque magna posuere, euismod ac tincidunt tempor est. Ut suscipit nisi eu purus. Proin ut pede mauris eget ipsum. Integer vel quam nunc commodo consequat. Integer ac eros eu tellus dignissim viverra. Maecenas erat aliquam erat volutpat. Ut venenatis ipsum quis turpis. Integer cursus scelerisque lorem. Sed nec mauris id quam blandit consequat. Cras nibh mi hendrerit vitae, dapibus et aliquam et magna. Nulla vitae elit. Mauris consectetuer odio vitae augue.";

		this.articles = [
			{ id: 1, title: "Två knivdödade vid skola i Norge", caption: "Två personer, en kvinna och en pojke, har avlidit efter att blivit attackerade med kniv vid en skola i Kristiansand i södra Norge.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=98cdae86-537c-43de-b672-d377b90168f1&type=preview&source=98cdae86-537c-43de-b672-d377b90168f1&function=hardcrop&width=1376&height=777&q=80', content: lorem_ipsum },
			{ id: 2, title: "Sjuårings tystnad på Twitter oroar världen", caption: "En sjuårings Twitterkonto från de rebellkontrollerade östra delarna av Aleppo lorem ipsum.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=ae950290-53de-426f-84db-d8c2d51958de&type=preview&source=ae950290-53de-426f-84db-d8c2d51958de&function=hardcrop&width=1376&height=777&q=80', content: lorem_ipsum },
			{ id: 3, title: "Valls avgår – vill bli president", caption: "Frankrikes presidentval i vår står troligen mellan högerns François Fillon och lorem ipsum dolor sit amet.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=9ef2f30a-2ed3-4d40-bd4e-7d56fca21bc7&type=preview&source=9ef2f30a-2ed3-4d40-bd4e-7d56fca21bc7&function=hardcrop&width=1376&height=897&q=80', content: lorem_ipsum },
			{ id: 4, title: "Pekka Haavisto överväger presidentkandidatur", caption: "De grönas riksdagsledamot Pekka Haavisto säger att han överväger att ställa upp dolor sit amet.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=f6d5eb2b-1830-4ddc-a265-e1d17570053a&type=preview&source=f6d5eb2b-1830-4ddc-a265-e1d17570053a&function=hardcrop&width=1376&height=936&q=80', content: lorem_ipsum },
			{ id: 5, title: "Många döda i brand på lyxhotell i Pakistan", caption: "Minst elva personer omkom och 75 skadades i en brand på ett fyrstjärnigt hotell lorem ipsum dolor sit amet.", imageUrl: 'https://doeho6k8shw5z.cloudfront.net/imengine/image.php?uuid=cbe27d56-d36b-4978-879e-5719c6636b5c&type=preview&source=cbe27d56-d36b-4978-879e-5719c6636b5c&function=hardcrop&width=1376&height=902&q=80', content: lorem_ipsum }
		];
	}

	render() {
		var titleConfig = {
			title: 'HBL'
		};
		var rightButtonConfig = {
			title: 'Favorites',
			handler: function () {
				alert('Hello!');
			}
		};

		return (
            <View>
              <NavigationBarWrapper
                  title={ titleConfig }
                  rightButton={ rightButtonConfig } />
              <ScrollViewContainer>
                <ArticlesAccordionView articles={ this.articles }></ArticlesAccordionView>
              </ScrollViewContainer>
              <TransportationInfoView />
            </View>
		);
	}
}

AppRegistry.registerComponent('HBLCommute', () => HBLCommute);
