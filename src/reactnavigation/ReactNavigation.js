import {createStackNavigator, createAppContainer} from "react-navigation";
import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";

export const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
});

