import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from "react-native";

// class MyButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { myButtonOpacity: 1, };
//     }
//     render() {
//         return (
//             <View style={[styles.button, {opacity: this.state.myButtonOpacity}]}>
//                 <Text>{this.props.label}</Text>
//             </View>
//         )
//     }
// }
//
// class SetNativeProps extends React.Component {
//
//
//     render() {
//         return (
//             <TouchableOpacity>
//                 <MyButton label="Press me!"/>
//             </TouchableOpacity>
//         )
//     }
// }
//
// const styles = () => {
//     button: {
//         width: 100
//         height: 40
//     }
// }
//
// // You can then use your `FadeInView` in place of a `View` in your components:
// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={{flex:1, alignItems:'center'}}>
//                 <SetNativeProps/>
//             </View>
//         )
//     }
// }

export default class App extends React.Component {
    clearText = () => {
        this._textInput.setNativeProps({text: ''});
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TextInput
                    ref={component => this._textInput = component}
                    style={{height: 50, flex: 1, marginHorizontal: 20, borderWidth: 1, borderColor: 'brown', backgroundColor:'cyan'}}
                />
                <TouchableOpacity onPress={this.clearText}>
                    <Text>Clear text</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

