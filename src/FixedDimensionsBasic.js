import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class FixedDimensionsBasic extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={{
                    width: 50,
                    height: 50,
                    backgroundColor: 'powderblue',
                }}/>
                <View style={{
                    width: 50,
                    backgroundColor: 'skyblue',

                }}/>
                <View style={{
                    width: 50,
                    backgroundColor: 'steelblue',
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
    }
})