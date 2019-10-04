/**
 * Created by wangdi on 9/11/16.
 */
'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    View,
    StyleSheet,
    Platform,
    PixelRatio,
    FlatList,
    TouchableOpacity,
    TouchableNativeFeedback,
    Image
} from 'react-native';
import px2dp from '../utils/px2dp';
import theme from '../config/theme';


export default class SimpleCardView extends Component {
    static propTypes = {
        isRenderHeader: PropTypes.bool
    };

    static defaultProps = {
        isRenderHeader: true
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.props.contents
        };
    }

    _itemClickCallback(rowData) {

    }

    _renderItem(rowData, sectionID, rowID, highlightRow) {
        if (Platform.OS === 'ios') {
            return (
                <TouchableOpacity
                    onPress={this._itemClickCallback.bind(this, rowData)}
                    activeOpacity={theme.btnActiveOpacity}>
                    {this._renderItemContent(rowData)}
                </TouchableOpacity>
            );
        } else if (Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback onPress={this._itemClickCallback.bind(this, rowData)}>
                    {this._renderItemContent(rowData)}
                </TouchableNativeFeedback>
            );
        }
    }

    _renderItemContent(rowData) {
        return (
            <View style={styles.item}>
                <View style={{
                    flex: 20,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    {rowData.screenshot ?
                        <Image source={{uri: rowData.screenshot.url}}
                            style={styles.image}/>
                        :
                        <Image source={require('../images/user_article_no_data.png')}
                            style={styles.image}/>
                    }
                </View>
                <View style={{flex: 80, marginTop: px2dp(10)}}>
                    <Text style={styles.content} numberOfLines={2}>{rowData.title}</Text>
                    <View style={styles.infoBar}>
                        <Text style={styles.infoBarText} numberOfLines={1}>{rowData.collectionCount}人收藏
                                                                                                    • {rowData.user.username} • {rowData.time}</Text>
                    </View>
                </View>
            </View>
        );
    }

    _renderHeader() {
        if (this.props.isRenderHeader) {
            return (
                <View style={styles.header}>
                    <Text>好书推荐</Text>
                </View>
            );
        }
    }

    render() {
        return (
            <FlatList
                style={styles.listView}
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderItem={this._renderItem.bind(this)}
                renderHeader={this._renderHeader.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    listView: {
        marginTop: px2dp(15)
    },
    header: {
        backgroundColor: '#fff',
        height: px2dp(40),
        paddingLeft: px2dp(15),
        justifyContent: 'center'
    },
    item: {
        flexDirection: 'row',
        width: theme.screenWidth,
        height: px2dp(80),
        backgroundColor: '#fff',
        paddingLeft: px2dp(15),
        paddingRight: px2dp(17),
        borderTopColor: '#d4d4d4',
        borderTopWidth: 1 / PixelRatio.get()
    },
    content: {
        color: '#000',
        fontSize: px2dp(15),
    },
    image: {
        height: px2dp(55),
        width: px2dp(55),
        backgroundColor: '#f4f4f4',
        resizeMode: 'cover'
    },
    infoBar: {
        flexDirection: 'row',
        marginTop: px2dp(3)
    },
    infoBarText: {
        fontSize: px2dp(11),
        color: theme.grayColor
    }
});
