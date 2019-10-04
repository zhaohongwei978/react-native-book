import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    Platform,
    ScrollView,
    TouchableNativeFeedback,
    TouchableOpacity
} from 'react-native';
import {
    ListItem,
} from 'react-native-elements';
import theme from '../../config/theme';
import Items from '../../components/Items';
import Avatar from '../../components/Avatar';
import TextButton from '../../components/TextButton';
import Button from '../../components/Button';
import px2dp from '../../utils/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';

type props = {}

export default class Home extends Component<props> {
    constructor(props) {
        super(props);

    }

    renderItem = ({item}) => (
        <ListItem
            title={item.name}
            subtitle={item.subtitle}
            leftAvatar={{source: {uri: item.avatar_url}}}
            bottomDivider
            chevron
        />
    );

    _onPressCallback(){

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.actionBar}>
                    <Text style={{color: theme.actionBar.fontColor, fontSize: theme.actionBar.fontSize}}>我的</Text>
                </View>
                <ScrollView>
                    {Platform.OS === 'android' ?
                        <TouchableNativeFeedback onPress={this._onPressCallback.bind(this, 0)}>
                            <View style={styles.intro}>
                                <Avatar image={require('../../images/logo.png')} size={px2dp(55)} textSize={px2dp(20)}/>
                                <View>
                                    <Text style={{color: theme.text.color, fontSize: px2dp(20)}}>Kira</Text>
                                </View>
                                <Button text="签到积分"
                                    color="#949494"
                                    fontSize={px2dp(12)}
                                    onPress={this._onPressCallback.bind(this, 1)}/>
                            </View>
                        </TouchableNativeFeedback>
                        :
                        <TouchableOpacity onPress={this._onPressCallback.bind(this, 0)}>
                            <View style={styles.intro}>
                                <Avatar image={require('../../images/logo.png')} size={px2dp(55)} textSize={px2dp(20)}/>
                                <View style={{marginLeft: px2dp(14)}}>
                                    <Text style={{color: theme.text.color, fontSize: px2dp(20)}}>Kira</Text>
                                </View>
                                <Button text="签到积分"
                                    color="#949494"
                                    fontSize={px2dp(12)}
                                    onPress={this._onPressCallback.bind(this, 1)}/>
                            </View>
                        </TouchableOpacity>
                    }
                    <View style={styles.list}>
                        <Items icon="md-heart"
                            text="我的通知"
                            subText="15篇"
                            iconColor="#32cd32"
                            onPress={this._onPressCallback.bind(this, 2)}/>
                        <Items icon="md-eye" text="付费会员" subText="今日优惠》" onPress={this._onPressCallback.bind(this, 3)}/>
                    </View>

                    <View style={styles.list}>
                        <Items icon="md-pricetag" text="我的关注" subText="》" onPress={this._onPressCallback.bind(this, 4)}/>
                        <Items icon="md-heart"
                            text="我的收藏"
                            subText="》"
                            iconColor="#32cd32"
                            onPress={this._onPressCallback.bind(this, 2)}/>
                        <Items icon="md-eye" text="浏览历史" subText="》" onPress={this._onPressCallback.bind(this, 3)}/>
                        <Items icon="md-pricetag" text="漫画商城" subText="今日推荐》" onPress={this._onPressCallback.bind(this, 4)}/>
                        <Items icon="md-pricetag" text="快看卡片" subText="新品发布》" onPress={this._onPressCallback.bind(this, 4)}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    actionBar: {
        height: theme.actionBar.height,
        backgroundColor: theme.actionBar.backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : px2dp(20),
    },
    text: {
        fontSize: 30,
        color: 'black'
    },
    list: {
        flex: 1,
        borderTopWidth: 1 / PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(15)
    },
    intro: {
        height: px2dp(160),
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: px2dp(20),
        borderTopWidth: 1/PixelRatio.get(),
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#c4c4c4',
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(10)
    },
});
