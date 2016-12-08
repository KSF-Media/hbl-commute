/**
 * KSF HBL Commute
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
	AppRegistry,
	Navigator,
	TouchableHighlight,
	Text
} from 'react-native';

import * as GLOBAL from './app/Globals';
import MainView from './app/views/MainView';
import MyListView from './app/views/MyListView';
import ArchiveView from './app/views/ArchiveView';

export default class HBLCommute extends Component {

	screenToRender(route, navigator) {
		if(route.id === "main") {
			return <MainView navigator={ navigator } />;
		} else if(route.id === "my-list") {
			return <MyListView navigator={ navigator } />;
		} else if(route.id === 'archive') {
			return <ArchiveView navigator={ navigator } />;
		}
	}

	render() {
		const routes = GLOBAL.ROUTES;
		return (
			<Navigator
				initialRoute={ routes[0] }
				initialRouteStack={ routes }
				renderScene={ (route, navigator) => this.screenToRender(route, navigator) }
			/>
		);
	}

}

AppRegistry.registerComponent('HBLCommute', () => HBLCommute);
