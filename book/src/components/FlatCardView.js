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
    Image, Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window');
const itemHight = 200;
import theme from '../config/theme';
import Login from '../view/login/Login';
import WebViewPage from '../view/WebViewPage';
export default class FlatCardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: this.props.content,
            refreshing: true,
            isInit: false,
            MainColor: theme.pageBackgroundColor,

        };
    }

    _onPressCallback(rowData) {
        console.log('--这里',rowData)
        this.props.navigator.push({
            component: WebViewPage,
            args: {rowData: rowData}
        });
    }

    _renderItemView(item) {

        if (Platform.OS == 'ios') {
            return (
                <TouchableOpacity onPress={this._onPressCallback.bind(this, item)}>
                    <View style={[styles.flatItem, {backgroundColor: this.state.MainColor}]}>
                        <Image
                            source={{uri: item.image}}
                            style={styles.flatItemImage}/>
                        <View style={[styles.flatItemIntroduce, {backgroundColor: this.state.MainColor}]}>
                            <Text style={styles.flatItemTitle}
                                numberOfLines={1}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableNativeFeedback onPress={this._onPressCallback.bind(this, item)}>
                    <View style={[styles.flatItem, {backgroundColor: this.state.MainColor}]}>
                        <Image
                            source={{uri: item.images}}
                            style={styles.flatItemImage}/>
                        <View style={[styles.flatItemIntroduce, {backgroundColor: this.state.MainColor}]}>
                            <Text style={styles.flatItemTitle}
                                numberOfLines={1}>
                                {item.title}
                            </Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            );
        }
    }

    _getItemLayout(data, index) {
        return {length: itemHight, offset: itemHight * index, index};
    }

    render() {
        return (
            <FlatList
                data={this.props.content}
                keyExtractor={(item, index) => index}
                renderItem={
                    ({item}) => this._renderItemView(item)
                }
                getItemLayout={(data, index) => this._getItemLayout(data, index)}
                showsVerticalScrollIndicator={false}
                numColumns={3}
            />
        );

    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flat_view: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: theme.pageBackgroundColor,
    },

    flatItem: {
        width: (width) / 3,
        height: itemHight,
        alignItems: 'center',
        borderRadius: 4,
    },
    flatItemImage: {
        width: (width - 10) / 3 - 10,
        height: itemHight - 26,
        borderRadius: 4,
    },
    flatItemIntroduce: {
        width: (width - 10) / 3 - 10,
        alignItems: 'center',
        padding: 2,
    },
    flatItemTitle: {
        fontSize: 14,
        color: theme.text.color,
    },
});
