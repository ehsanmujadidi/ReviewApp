import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import About from '../screens/about';
import Reviews from '../screens/reviews';

const screens = {
    Home: {
        screen: Home
    },
    About: {
        screen: About
    },
    Reviews: {
        screen: Reviews
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);