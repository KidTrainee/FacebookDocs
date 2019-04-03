import {Button, View} from "react-native";
import React from "react";
import RNMyLibraryModule from "react-native-my-library";

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title={"Press me!"} onPress={this.handleOnPress()}/>
            </View>
        )
    }

    handleOnPress() {
        RNMyLibraryModule.show('Hello World', 3000);
    }
}

