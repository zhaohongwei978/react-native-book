import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import theme from '../../config/theme';
import Commentary from '../commentary/Commentary';
export default class BookTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: []
        };
    }

    _onRefresh() {
        this.setState({refreshing: true});
    }

    _renderContents(){
        var {tabTag} = this.props;

        return (
            <View>
                <Commentary/>
            </View>
        );
    }
    render() {
        return (
            <ScrollView
                style={{}}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['red', '#ffd500', '#0080ff', '#99e600']}
                        tintColor={theme.themeColor}
                        title="Loading..."
                        titleColor={theme.themeColor}
                    />
                }>
                { this._renderContents() }
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    commentary: {
        width:theme.screenWidth,
    },
});
