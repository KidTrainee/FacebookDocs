import React, {Component} from 'react';
import {View, Text} from "react-native";
import ViewPager from "react-native-view-pager/src";

export default class ViewPagerBasic extends Component {
    render(): React.ReactNode {
        return (
            <ViewPager
                style={styles.viewPager}
                initialPage={0}>
                <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View>
                <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                </View>
            </ViewPager>
        )
    }
}

const styles = {
    viewPager: {
        flex: 1,
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
}