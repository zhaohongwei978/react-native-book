import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView,{ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view';
import theme from '../../config/theme';
import BookTab from './BookTab';
type props = {}

export default class Book extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            tabNames: ['关注', '热点']
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar />}
                    tabBarBackgroundColor="rgb(22,131,251)"
                    tabBarActiveTextColor="white"
                    tabBarInactiveTextColor="rgba(255,255,255,0.5)"
                    tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
                    tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
                    {this.state.tabNames.map((item, i) => {
                        return(
                            <BookTab tabLabel={item} key={i} tabTag={item}/>
                        );})
                    }
                </ScrollableTabView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.pageBackgroundColor
    },
    text: {
        fontSize: 30,
        color: 'black'
    },

    textStyle: {
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        textAlign:'center'
    },
});
