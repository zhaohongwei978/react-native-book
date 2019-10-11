import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import MainPage from './../view/MainPage'
export default class Navigation extends Component{
    render(){
        return(
            <Navigator
                initialRoute={{component: MainPage}}
                renderScene={(route, navigator) => {
                    return <route.component navigator={navigator} {...route.args}/>
                }
                }/>
        );
    }
}
