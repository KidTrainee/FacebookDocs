import React, {Component} from 'react';
import {AppRegistry, FlatList, StyleSheet, Text, View, Platform} from 'react-native';

export default class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => this.renderItem(item)}
                />
            </View>
        );
    }

    renderItem(item) {
        if (item.key.startsWith("D"))
            return (<Text style={styles.itemStartWithD}>{item.key}</Text>)
        else {
            return (
                <Text style={styles.item}>{item.key}</Text>
            )
    }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'blue',
            },
        }),
    },
    itemStartWithD: {
        padding: 10,
        fontSize: 30,
        height: 56,
        backgroundColor : Platform.OS === 'ios' ? 'orange' : 'red',

    }
})
