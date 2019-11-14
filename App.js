import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  createAppContainer,
  withNavigation,
  createSwitchNavigator
} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import VoteScreen from './src/screens/VoteScreen';
import SurveyScreen from './src/screens/SurveyScreen';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { Transition } from 'react-native-reanimated';
const uiTheme = {
  palette: {
    primaryColor: '#00E9A1',
    accentColor: COLOR.pink500
  }
};

const Header = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Vote');
      }}
    >
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Vote: VoteScreen,
    Survey: SurveyScreen
  },
  {
    initialRouteName: 'Survey',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          // ${focused ? '' : '-outline'}
          iconName = `md-home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `md-options`;
        } else if (routeName === 'Survey') {
          iconName = 'md-clipboard';
        } else if (routeName === 'Vote') {
          iconName = 'md-checkmark';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

const stackNavigator = createStackNavigator(
  {
    mainFlow: TabNavigator
  },
  {
    initialRouteName: 'mainFlow',
    defaultNavigationOptions: {
      title: 'Apartments'
    }
  }
);

const switchNavigator = createAnimatedSwitchNavigator(
  {
    welcomeFlow: WelcomeScreen,
    testFlow: stackNavigator
  },
  {
    initialRouteName: 'welcomeFlow',
    defaultNavigationOptions: {
      title: 'Home'
    },
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={300}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={400} />
      </Transition.Together>
    )
  }
);

const App = createAppContainer(switchNavigator);

const wrap = () => (
  <ThemeContext.Provider value={getTheme(uiTheme)}>
    <App/>
  </ThemeContext.Provider>
);

export default wrap;
