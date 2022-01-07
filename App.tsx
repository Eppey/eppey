import React from 'react';
import { StyleSheet, Image, Pressable, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

// @ts-ignore
import { ModalPortal } from 'react-native-modals';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Amplify, { Auth } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure({ ...config, Analytics: { disabled: true } });

import Welcome from './src/screens/Welcome';
import Signup from './src/screens/Auth/Signup';
import SignupComplete from './src/screens/Auth/SignupComplete';
import Signin from './src/screens/Auth/Signin';
import PwReset from './src/screens/Auth/PwReset';
import PwResetConfirm from './src/screens/Auth/PwResetConfirm';
import PwResetDone from './src/screens/Auth/PwResetDone';

import Home from './src/screens/Main/Home';
import Search from './src/screens/Main/Search';
import Write from './src/screens/Main/Write';
import PostDetail from './src/screens/Main/PostDetail';
import Notification from './src/screens/Main/Notification';
import MyPage from './src/screens/Main/MyPage';

import SchoolBoard from './src/screens/Main/SchoolBoard';
import MajorBoard from './src/screens/Main/MajorBoard';

import { fonts } from './src/styles/fonts';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = AnimatedTabBarNavigator();

import { useSelector } from 'react-redux';
import { selectSchool, selectMajor } from './src/redux/slices/userSlice';

function Main({ navigation }: any) {
  const logOut = async () => {
    try {
      await Auth.signOut();
      navigation.navigate('Signin');
    } catch (err: any) {
      Alert.alert('Error', err);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#272F40' },
      }}
    >
      <Tab.Screen
        name="HomeTopTabs"
        component={HomeTopTabs}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.icon}
                source={require('./assets/icons/home.png')}
              />
            );
          },
          headerStyle: {
            backgroundColor: '#F2F2F2',
            height: 44,
          },
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.icon}
                source={require('./assets/icons/search.png')}
              />
            );
          },
          headerStyle: {
            backgroundColor: '#98C4EC',
          },
        }}
      />
      <Tab.Screen
        name="Write"
        component={Write}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.icon}
                source={require('./assets/icons/write.png')}
              />
            );
          },
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Write');
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                style={styles.icon}
                source={require('./assets/icons/notification.png')}
              />
            );
          },
          headerStyle: {
            backgroundColor: '#FFB8B8',
          },
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                style={styles.icon}
                source={require('./assets/icons/more.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function HomeTopTabs() {
  const major = useSelector(selectMajor);
  const school = useSelector(selectSchool);
  return (
    <TopTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        lazy: true,
      }}
      appearance={{
        tabBarBackground: '#FFE1BD',
        activeTabBackgrounds: '#FFFFFF',
        whenInactiveShow: TabElementDisplayOptions.ICON_ONLY,
        whenActiveShow: TabElementDisplayOptions.LABEL_ONLY,
        dotSize: DotSize.MEDIUM,
        bottomPadding: -20,
      }}
      tabBarOptions={{ labelStyle: { ...fonts.body1 } }}
    >
      <TopTab.Screen
        name="SchoolBoard"
        component={SchoolBoard}
        options={{
          title: school,
          tabBarIcon: ({ size }: any) => (
            <MaterialCommunityIcons name="school" color="#272F40" size={size} />
          ),
        }}
      />
      <TopTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Topic',
          tabBarIcon: ({ size }: any) => (
            <MaterialCommunityIcons name="home" color="#272F40" size={size} />
          ),
        }}
      />
      <TopTab.Screen
        name="MajorBoard"
        component={MajorBoard}
        options={{
          title: major,
          tabBarIcon: ({ size }: any) => (
            <MaterialCommunityIcons
              name="book-open-variant"
              color="#272F40"
              size={size}
            />
          ),
        }}
      />
    </TopTab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="SignupComplete" component={SignupComplete} />
            <Stack.Screen
              name="Signin"
              component={Signin}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="PwReset" component={PwReset} />
            <Stack.Screen name="PwResetConfirm" component={PwResetConfirm} />
            <Stack.Screen name="PwResetDone" component={PwResetDone} />
            <Stack.Screen
              name="Main"
              component={Main}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="Write" component={Write} />
            <Stack.Screen name="PostDetail" component={PostDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
      <ModalPortal />
    </Provider>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
