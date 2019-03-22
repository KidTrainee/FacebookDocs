import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
        console.log('constructor');
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'red',
                        borderBottomWidth: 1,
                    }}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    multiline={true}
                    underlineColorAndroid='transparent'
                    blurOnSubmit={true}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    multiline={false}
                    autoFocus
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}