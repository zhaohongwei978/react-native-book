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
import CardView from '../../components/SimpleCardView';
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



type props = {}

export default class Home extends Component<props> {
    constructor(props){
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: [{title:'我是title',collectionCount:10,user:'我是title',time:'我是title',url:'我是title',commentsCount:'我是title',viewsCount:'我是title',screenshot:'我是title'}],
            btnName: ['所有分类','文学艺术','人文科学','经济管理','生活休闲'],
            btnName2: ['外语学习','自然科学','考试教育','计算机','医学']
        }
    }

    _handleBack() {
        const navigator = this.props.navigator;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    _forgetPassword(){

    }
    _signupCallback(){
        this.props.navigator.push({

        });
    }

    _imageButtonCallback(position){
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
                            return(
                                <ImageButton
                                    key={index}
                                    image={imgBtnImages[index]}
                                    imgSize={px2dp(35)}
                                    text={item}
                                    color="#000"
                                    btnStyle={styles.imgBtn}
                                    onPress={this._imageButtonCallback.bind(this, index)}/>
                            )})
                        }
                    </View>
                    <View style={styles.imageBtnLine}>
                        {this.state.btnName2.map((item, index) => {
                            return(
                                <ImageButton
                                    key={index}
                                    image={imgBtnImages[index]}
                                    imgSize={px2dp(35)}
                                    text={item}
                                    color="#000"
                                    btnStyle={styles.imgBtn}
                                    onPress={this._imageButtonCallback.bind(this, index)}/>
                            )})
                        }
                    </View>
                    <CardView isRenderHeader={true} contents={this.state.dataBlob}/>
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
    imageBtnLine:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderBottomWidth: 1/PixelRatio.get(),
        borderBottomColor: '#c4c4c4'
    },
    imgBtn: {
        height: px2dp(80),
        width: Dimensions.get('window').width/5,
    },
    header:{
        backgroundColor: '#fff',
        height: px2dp(40),
        justifyContent: 'center',
        paddingLeft: px2dp(15),
    }
});
