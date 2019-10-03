import React,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

type props = {}

export default class Home extends Component<props>{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Book</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'grey'
    },
    text:{
        fontSize:30,
        color:'black'
    }
});
