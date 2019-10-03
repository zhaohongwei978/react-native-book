import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './home/Home';
import Book from './book/Book';
import Mine from './mine/Mine';

const dataSource = [
    {
        icon: require('./../images/icon/home.png'),
        selectedIcon: require('./../images/icon/home_select.png'),
        tabPage: 'Home',
        tabName: '首页',
        component:Home,
    },
    {
        icon: require('../images/icon/book.png'),
        selectedIcon: require('../images/icon/book_select.png'),
        tabPage: 'Book',
        tabName: '图书',
        component:Book,
    },
    {
        icon: require('../images/icon/map.png'),
        selectedIcon: require('../images/icon/map_select.png'),
        tabPage: 'Owner',
        tabName: '我的',
        component:Mine,
    }];
var navigation = null;
type Props = {};
export default class Root extends Component<Props> {

    constructor(props){
        super(props);
        navigation = this.props.navigation;
        this.state = {
            selectedTab:'Home'
        }
    }

    render() {
        let tabViews = dataSource.map((item, i) => {
            return (
                <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab===item.tabPage}
                    titleStyle={{color:'black'}}
                    selectedTitleStyle={{color:'#7A16BD'}}
                    renderIcon={() => <Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    onPress = {() => {this.setState({selectedTab:item.tabPage})}}
                    key={i}
                >
                    <item.component  navigation={navigation}/>
                </TabNavigator.Item>
            );
        });

        return (
            <View style={styles.container}>
                <TabNavigator>
                    {tabViews}
                </TabNavigator>
            </View>

        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tabIcon:{
        width:23,
        height:23,
    }
});
