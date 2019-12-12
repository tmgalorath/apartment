import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  createAppContainer,
  withNavigation,
  createSwitchNavigator
} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/MeScreen';
import UsScreen from './src/screens/UsScreen';
import SelectRoom from './src/screens/SelectRoom';
import SurveyScreen from './src/screens/SurveyScreen';
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { Transition } from 'react-native-reanimated';
import Bringing from './src/components/Bringing';
import Wanting from './src/components/Wanting';
import Personal from './src/components/Personal';

import AsyncStorage from 'redux-persist/lib/storage';

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { Provider } from 'react-redux';
import tutorialReducer from './src/reducers/tutorials';
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, tutorialReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

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
    Us: UsScreen,
    Me: HomeScreen,
  },
  {
    initialRouteName: 'Us',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Us') {
          // ${focused ? '' : '-outline'}
          iconName = `md-home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = `md-options`;
        } else if (routeName === 'Me') {
          iconName = 'md-clipboard';
        } else if (routeName === 'Missing') {
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
    mainFlow: TabNavigator,
    Bringing: Bringing,
    Personal: Personal,
    Wanting: Wanting
  },
  {
    initialRouteName: 'mainFlow',
    defaultNavigationOptions: {
      header: null
    }
  }
);

const switchNavigator = createAnimatedSwitchNavigator(
  {
    welcomeFlow: WelcomeScreen,
    SelectRoom: SelectRoom,
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

class Wrap extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeContext.Provider value={getTheme(uiTheme)}>
            <App />
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}

// const wrap = () => (
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <ThemeContext.Provider value={getTheme(uiTheme)}>
//         <App />
//       </ThemeContext.Provider>
//     </PersistGate>
//   </Provider>
// );

export default Wrap;
