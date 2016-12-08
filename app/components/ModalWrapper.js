import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
//    Modal,
} from 'react-native';

export default class ModalWrapper extends Component{

    state = {
        modalVisible: this.props.modalVisible
    }


    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(){
        return(
            <View style={styles.ModalWindow}>
                <View id="article-wrapper" style={styles.ModalWrapper}>
                    <TouchableHighlight onPress={() => {
                        this.context.onCloseModal();
                    }}>
                        <View><Text>close button</Text></View>
                    </TouchableHighlight>
                    <Text style={styles.articleTitle}>test</Text>
                </View>
            </View>
        );
    }


    _modalClose(){
        () => {
            this.props.hideFunction();
        };
    }


}

var modalWidth = Dimensions.get('window').width - 20;
var modalHeight = Dimensions.get('window').height - 60;

const styles = StyleSheet.create({
    ModalWindow:{
//        backgroundColor:'transparent',
    },
    ModalWrapper:{
        flex:1,
//        padding:10,
//        position:'absolute',
        backgroundColor:'white',
        marginTop:30,
        marginLeft:10,
        height:modalHeight,
        width:modalWidth,
    },
    articleTitle: {
		fontFamily: 'Merriweather',
		fontSize: 16,
		letterSpacing: 0,
		padding: 10,
		marginLeft: 20
	},

});
