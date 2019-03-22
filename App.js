import React, {Component} from 'react';
import {View} from 'react-native';
import UselessTextInputMultiline from "./src/UselessTextInput";
import {BasicButton} from "./src/BasicButton";
import PizzaTranslator from "./src/PizzaTranslator";
import IScrolledDownAndWhatHappenedNextShockedMe from "./src/IScrolledDownAndWhatHappenedNextShockedMe";
import FlatListBasics from "./src/listbasics/FlatListBasics";
import ViewPagerBasic from "./src/ViewPagerBasic";
import SectionListBasics from "./src/listbasics/SectionListBasics";
import FetchExample from "./src/listbasics/FetchExample";
import {MainNavigator} from "./src/reactnavigation/ReactNavigation";
import {createAppContainer} from "react-navigation";
import ImageBasics from "./src/ImageBasics";

const App = () => {
    return (
        <View style={{flex:1}}>

        </View>
    )
}

export default App


// import { View, Text } from "react-native";
// import { createStackNavigator, createAppContainer } from "react-navigation";
//
// class HomeScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//                 <Text>Home Screen</Text>
//             </View>
//         );
//     }
// }
//
// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: HomeScreen
//     }
// });
//
// export default createAppContainer(AppNavigator);
