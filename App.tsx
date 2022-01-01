import React from 'react';
import { StyleSheet, Image, View, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

// @ts-ignore
import { ModalPortal } from 'react-native-modals';

import Amplify from 'aws-amplify';
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

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main() {
  const navigation: any = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#272F40' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
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
            backgroundColor: '#FFE1BD',
          },
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
          tabBarIcon: () => {
            return (
              <Image
                style={styles.icon}
                source={require('./assets/icons/more.png')}
              />
            );
          },
          headerStyle: {
            backgroundColor: '#D1CAF2',
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const postDetailMenus = () => (
    <View style={styles.detailMenus}>
      <Pressable
        style={styles.detailMenuItem}
        onPress={() => console.log('hi')}
      >
        <Image
          style={styles.postIcon}
          source={require('./assets/icons/notification.png')}
        />
      </Pressable>
      <Pressable
        style={styles.detailMenuItem}
        onPress={() => console.log('hi')}
      >
        <Image
          style={styles.postIcon}
          source={require('./assets/icons/bookmark_off.png')}
        />
      </Pressable>
      <Pressable
        style={styles.detailMenuItem}
        onPress={() => console.log('hi')}
      >
        <Image
          style={styles.postIcon}
          source={require('./assets/icons/flag.png')}
        />
      </Pressable>
    </View>
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
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
            <Stack.Screen
              name="PostDetail"
              component={PostDetail}
              options={{
                headerShown: true,
                headerTitle: '',
                headerTintColor: '#FFFFFF',
                headerRight: () => postDetailMenus(),
                headerStyle: {
                  backgroundColor: '#272F40',
                },
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
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
  postIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  detailMenus: {
    flexDirection: 'row',
  },
  detailMenuItem: {
    paddingHorizontal: 5,
  },
});
