import {
	Animated
} from 'react-native';

export function FetchArticles(uri, object){

	fetch(uri)
	.then(function(response){ return response.json(); })
	.then(function(json){
		object.loading = false;
		object.setState({
			fadeAnim: new Animated.Value(0),
			articles: json.articles
		});
		Animated.timing(
			object.state.fadeAnim,
			{ toValue: 1 }
		).start();
	})
	.catch(function(error) {
		console.log('There has been a problem with your fetch operation: ' + error.message);
		throw error;
	});

}
