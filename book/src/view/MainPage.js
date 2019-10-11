import React, {Component} from 'react';
import {Text, View, BackHandler, ToastAndroid, Platform} from 'react-native';
import TabBar from '../components/TabBar';
import WebViewPage from './WebViewPage';
import Login from './login/Login';

export default class MainScene extends Component {
    constructor(props) {
        super(props);

    }

    static switchToWebViewPage(rowData) {
        this.props.navigator.push({
            component: WebViewPage,
            args: {rowData: rowData}
        });
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <TabBar navigator={this.props.navigator}/>
            </View>
        );
    }
}
