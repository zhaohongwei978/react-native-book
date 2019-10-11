import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import HomeFragment from '../view/home/Home';
import BookFragment from '../view/book/Book';
import MineFragment from '../view/mine/Mine';

import TabNavigator from 'react-native-tab-navigator';

const dataSource = [
    {
        icon: require('./../images/icon/home.png'),
        selectedIcon: require('./../images/icon/home_select.png'),
        tabPage: 'Home',
        tabName: '首页',
        component: HomeFragment,
    },
    {
        icon: require('../images/icon/book.png'),
        selectedIcon: require('../images/icon/book_select.png'),
        tabPage: 'Book',
        tabName: '图书',
        component: BookFragment,
    },
    {
        icon: require('../images/icon/map.png'),
        selectedIcon: require('../images/icon/map_select.png'),
        tabPage: 'Owner',
        tabName: '我的',
        component: MineFragment,
    }];
let navigation = null;
type Props = {};
export default class TabBar extends Component<Props> {
    constructor(props) {
        super(props);

        navigation = this.props.navigator;
        this.state = {
            selectedTab: 'Home'
        };
    }

    componentDidMount() {
    }


    render() {
        let tabViews = dataSource.map((item, i) => {
            return (
                <TabNavigator.Item
                    title={item.tabName}
                    selected={this.state.selectedTab === item.tabPage}
                    titleStyle={{color: 'black'}}
                    selectedTitleStyle={{color: '#7A16BD'}}
                    renderIcon={() => <Image style={styles.tabIcon} source={item.icon}/>}
                    renderSelectedIcon={() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
                    onPress={() => {
                        this.setState({selectedTab: item.tabPage});
                    }}
                    key={i}
                >
                    <item.component navigator={this.props.navigator}/>
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
    tabIcon: {
        width: 23,
        height: 23,
    }
});
