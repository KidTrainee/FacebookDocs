import React from 'react';
import {Animated, Text, View} from "react-native";

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),     // initial value for opacity: 0
    }

    componentDidMount(): void {
        Animated.sequence([
            // decay, then spring to start and twirl
            Animated.decay(50, {
                // coast to a stop
                velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
                deceleration: 0.997,
            }),
            Animated.parallel([
                // after decay, in parallel:
                Animated.spring(50, {
                    toValue: {x: 0, y: 0}, // return to start
                }),
                Animated.timing(twirl, {
                    // and twirl
                    toValue: 360,
                }),
            ]),
        ]).start(); // start the sequence group
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
            </View>
        )
    }
}

