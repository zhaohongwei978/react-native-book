import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    PixelRatio,
    FlatList,
    Image
} from 'react-native';
import theme from '../../config/theme';
import px2dp from '../../utils/px2dp';

export default class Commentary extends Component<props> {
    _getCommentaryItemView(item) {
        return (
            <View style={styles.commentaryItem}>
                <Image
                    source={{uri: item.avatar}}
                    style={[styles.avatarImg, {borderColor: theme.grayColor}]}
                />
                <View>
                    <View style={styles.commentaryItemTop}>
                        <Text style={styles.commentaryItemTopAuthor} numberOfLines={1}>
                            {item.authorName}
                        </Text>
                    </View>
                    <View style={styles.commentaryItemMid}>
                        <Text
                            numberOfLines={6}
                            style={styles.commentaryItemMidComment}
                        >{item.content}</Text>
                        <Text style={styles.commentaryItemMidCommentTime} numberOfLines={1}>{item.createTime}</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <ScrollView style={styles.commentary}>
                <View style={styles.commentaryRow}>
                    <Text style={styles.commentaryDes}>评论区</Text>
                </View>
                <View style={styles.flatContainer}>
                    <FlatList
                        data={[
                            {authorName:'斗破苍穹',avatar: 'http://attach.bbs.miui.com/forum/201806/19/234811ivqvoyyy8988gvru.jpg',content:'请优秀并与优秀者为伍，请独立 并以逻辑思考为基础 请热爱并尊重任性',createTime:'2019.10.1'},
                            {authorName:'坏蛋是怎样练成的',avatar: 'http://b-ssl.duitang.com/uploads/item/201810/18/20181018162951_kgwzm.thumb.700_0.jpeg',content:'胶带令人贫穷呀',createTime:'2019.10.1'},
                            {authorName:'宫廷乱世',avatar: 'http://b-ssl.duitang.com/uploads/item/201701/09/20170109194926_UHAWG.thumb.700_0.jpeg',content:'content',createTime:'2019.10.1'}
                        ]}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (this._getCommentaryItemView(item))}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    commentary: {
        width: theme.screenWidth,
        flex: 1,
        display: 'flex',
        backgroundColor: theme.pageBackgroundColor
    },
    commentaryRow: {
        display: 'flex',
        width: theme.screenWidth,
        height: px2dp(48),
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.grayColor,
        borderBottomWidth: 1 / PixelRatio.get(),
    },
    commentaryDes: {
        color: theme.text.color,
        fontSize: 16,
        fontWeight: '500',
    },
    flatContainer: {
        flex: 1,
        width: theme.screenWidth
    },
    commentaryItem: {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
    },
    avatarImg: {
        width: px2dp(36),
        height: px2dp(36),
        marginRight: px2dp(6),
        borderRadius: px2dp(48),
        borderWidth: 1 / PixelRatio.get(),
    },

    commentaryItemTop:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    commentaryItemTopAuthor:{
        color:theme.text.color,
        marginRight:8,
        fontSize:16,
        fontWeight: '500',
        maxWidth:theme.screenWidth/3,

    },
    commentaryItemMid:{
        width:theme.screenWidth-74
    },
    commentaryItemMidComment:{
        color:theme.text.color,
        fontSize:14,
        lineHeight:22,
        marginTop:4,
        marginBottom:4,
    },
    commentaryItemMidCommentTime:{
        color:theme.text.color,
        fontSize:12,
        paddingRight:6,
        alignSelf: 'flex-end',
    }

});
