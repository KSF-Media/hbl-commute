import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Modal,
} from 'react-native';

export default class ModalWrapper extends Component{

    state = {
        modalVisible: true,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render(){
        return(
            <Modal style={styles.ModalWindow}
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}>
                <View id="article-wrapper" style={styles.ModalWrapper}>
                    <TouchableHighlight onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                    }}>
                        <View><Text>close button</Text></View>
                    </TouchableHighlight>
                    <Text>Test</Text>
                </View>
            </Modal>
        );
    }

    _modalClose(){
        alert('closing modal');
        this.setState({ modalVisible:false });
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
});
