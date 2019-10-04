import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标
const {width, height} = Dimensions.get('window');
import px2dp from '../../utils/px2dp';
import Button from '../../components/Button';
import TextButton from '../../components/TextButton';

type props = {}

export default class Login extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {name: '', password: ''};
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    _forgetPassword(){

    }
    _signupCallback(){
        this.props.navigator.push({

        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.editGroup}>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            placeholder='请输入用户名'
                            underlineColorAndroid={'transparent'}
                            numberOfLines={1}
                            keyboardType={'numeric'}
                            placeholderTextColor="#c4c4c4"
                            autoFocus={true}
                            onChangeText={(name) => this.setState({name})}/>

                    </View>
                    <View style={styles.styleLine}/>
                    <View style={styles.editView1}>
                        <TextInput
                            style={styles.edit}
                            placeholder='请输入密码'
                            underlineColorAndroid={'transparent'}
                            numberOfLines={1}
                            keyboardType={'numeric'}
                            placeholderTextColor="#c4c4c4"
                            autoFocus={true}
                            onChangeText={(name) => this.setState({name})}/>

                    </View>

                    <View style={{marginTop: px2dp(10), height: px2dp(40)}}>
                        <Button text="登录" onPress={this._handleBack.bind(this)}/>
                    </View>
                    <View style={styles.textButtonLine}>
                        <TextButton text="忘记密码?" onPress={this._forgetPassword.bind(this)} color="rgba(255,255,255,0.5)"/>
                        <TextButton text="注册账号" onPress={this._signupCallback.bind(this)}/>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        justifyContent:'center',
        alignContent:'center'
    },
    styleLine: {
        height: 1 / PixelRatio.get(),
        backgroundColor: '#c4c4c4'
    },
    edit: {
        height: px2dp(40),
        fontSize: px2dp(13),
        backgroundColor: '#fff',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(15)
    },
    stylePassContainer: {
        backgroundColor: '#ffffff',
        height: 40,
        width: width,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    stylePassWord: {
        backgroundColor: '#ffffff',
        height: 40,
        width: width,
        textAlign: 'left',
        paddingLeft: 10
    },

    editGroup: {
        margin: px2dp(20)
    },
    editView1: {
        height: px2dp(48),
        backgroundColor: 'white',
        justifyContent: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },

    textButtonLine:{
        marginTop: px2dp(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
