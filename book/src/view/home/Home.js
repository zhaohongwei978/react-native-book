import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio,
    ScrollView,
    Image,
    RefreshControl,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标
const {width, height} = Dimensions.get('window');
import px2dp from '../../utils/px2dp';
import SWiper from 'react-native-swiper';
import SearchBar from '../../components/SearchBar';
import FlatCardView from '../../components/FlatCardView';
import ImageButton from '../../components/ImageButtonWithText';

const bannerImages = [
    require('../../images/banner/banner1.jpg'),
    require('../../images/banner/banner2.png')
];

const imgBtnImages = [
    require('../../images/hot.png'),
    require('../../images/hot.png'),
    require('../../images/hot.png'),
    require('../../images/hot.png'),
    require('../../images/hot.png'),
];

const bookSource =
    [
        {
            title: '坏蛋传',
            images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570266969860&di=4758ac83d1703ef09373b4ec84932a3c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F520f46ebb0180fab7eaad1478d15d790974bebbb2eb87-be2cmy_fw658'
        },
        {
            title: '嫦娥奔月',
            images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570266969859&di=e94b91302eca3cfc07db391f15bd1f08&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F250c8130c68c4f419872f6a28862a47355aae31612ad9-4ucAKr_fw658'
        },
        {
            title: '轩辕剑',
            images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570861779&di=90e0b541c9c8c2953fcab01471526762&imgtype=jpg&er=1&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F14%2F20160514105753_A4xXm.thumb.700_0.jpeg'
        },
        {
            title: '坏蛋传',
            images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570266969860&di=4758ac83d1703ef09373b4ec84932a3c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F520f46ebb0180fab7eaad1478d15d790974bebbb2eb87-be2cmy_fw658'
        },
        {
            title: '嫦娥奔月',
            images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570266969859&di=e94b91302eca3cfc07db391f15bd1f08&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F250c8130c68c4f419872f6a28862a47355aae31612ad9-4ucAKr_fw658'
        },
        {
            title: '坏蛋传',
            images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570266969860&di=4758ac83d1703ef09373b4ec84932a3c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F520f46ebb0180fab7eaad1478d15d790974bebbb2eb87-be2cmy_fw658'
        },
        {
            title: '嫦娥奔月',
            images: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570266969859&di=e94b91302eca3cfc07db391f15bd1f08&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F250c8130c68c4f419872f6a28862a47355aae31612ad9-4ucAKr_fw658'
        },
    ];

type props = {}

export default class Home extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: [{
                title: '我是title',
                collectionCount: 10,
                user: '我是title',
                time: '我是title',
                url: '我是title',
                commentsCount: '我是title',
                viewsCount: '我是title',
                screenshot: '我是title'
            }],
            btnName: ['所有分类', '文学艺术', '人文科学', '经济管理', '生活休闲'],
            btnName2: ['外语学习', '自然科学', '考试教育', '计算机', '医学']
        };
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    _forgetPassword() {

    }

    _signupCallback() {
        this.props.navigator.push({});
    }

    _imageButtonCallback(position) {
        this._alert();
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar/>
                <ScrollView>
                    <SWiper
                        height={px2dp(130)}
                        autoplay={true}
                        bounces={true}>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[0]} resizeMode="stretch"/>
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.image} source={bannerImages[1]} resizeMode="stretch"/>
                        </View>
                    </SWiper>
                    <View style={styles.imageBtnLine}>
                        {this.state.btnName.map((item, index) => {
                            return (
                                <ImageButton
                                    key={index}
                                    image={imgBtnImages[index]}
                                    imgSize={px2dp(35)}
                                    text={item}
                                    color="#000"
                                    btnStyle={styles.imgBtn}
                                    onPress={this._imageButtonCallback.bind(this, index)}/>
                            );
                        })
                        }
                    </View>
                    <View style={styles.imageBtnLine}>
                        {this.state.btnName2.map((item, index) => {
                            return (
                                <ImageButton
                                    key={index}
                                    image={imgBtnImages[index]}
                                    imgSize={px2dp(35)}
                                    text={item}
                                    color="#000"
                                    btnStyle={styles.imgBtn}
                                    onPress={this._imageButtonCallback.bind(this, index)}/>
                            );
                        })
                        }
                    </View>
                    <FlatCardView content={bookSource}/>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    image: {
        height: px2dp(130),
        width: Dimensions.get('window').width
    },
    imageBtnLine: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1 / PixelRatio.get(),
        borderBottomColor: '#c4c4c4'
    },
    imgBtn: {
        height: px2dp(80),
        width: Dimensions.get('window').width / 5,
    },
    header: {
        backgroundColor: '#fff',
        height: px2dp(40),
        justifyContent: 'center',
        paddingLeft: px2dp(15),
    }
});
