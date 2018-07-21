// Import React Navigation
import {
    TabNavigator,
    StackNavigator,
    TabBarBottom,
} from 'react-navigation';

import tabBarIcon from './feed/utils/tabBarIcon';
// Import the screens
import FeedScreen from './feed/screens/FeedScreen';
import NewPostScreen from './feed/screens/NewPostScreen';



const navigator = TabNavigator(
    {
        // The name `Feed` is used later for accessing screens
        Feed: {
            // Define the component we will use for the Feed screen.
            screen: FeedScreen,
            navigationOptions: {
                // Add a cool Material Icon for this screen
                tabBarIcon: tabBarIcon('home'),
            },
        },
        // All the same stuff but for the Post screen
        Post: {
            screen: NewPostScreen,
            navigationOptions: {
                tabBarIcon: tabBarIcon('add-circle'),
            },
        },
    },
    {
        // We want to hide the labels and set a nice 2-tone tint system for our tabs
        tabBarOptions: {
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            showLabel: false,
            activeTintColor: 'black',
            inactiveTintColor: 'gray',

        },
    },
);

// Create the navigator that pushes high-level screens like the `NewPost` screen.
const stackNavigator = StackNavigator(
    {
        Main: {
            screen: navigator,
            // Set the title for our app when the tab bar screen is present
            navigationOptions: { title: 'Feed' },
        },
        // This screen will not have a tab bar
        NewPost: NewPostScreen,
    },

    {
        cardStyle: { backgroundColor: 'white' },
    },
);

// Export it as the root component
export default stackNavigator;
