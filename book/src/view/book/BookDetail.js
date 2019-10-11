import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import theme from '../../config/theme';
export default class BookTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: []
        };
    }

    render() {
        return (
            <Text>1222</Text>
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
});
