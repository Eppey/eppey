import React, { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

import {
  registerForPushNotificationAsync,
  sendPushNotification,
} from '../../request/notification';

import { Subscription as SubscriptionType } from 'expo-modules-core';
import { Notification as NotificationType } from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Notification = () => {
  const [notification, setNotification] = useState<NotificationType>();
  const [pushToken, setPushToken] = useState('');
  const notificationListener = useRef<SubscriptionType>();
  const responseListener = useRef<SubscriptionType>();

  useEffect(() => {
    registerForPushNotificationAsync().then(
      (token) => token && setPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    // removes all subscription when the component is unmounted
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current as SubscriptionType
      );
      Notifications.removeNotificationSubscription(
        responseListener.current as SubscriptionType
      );
    };
  });
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Text>Your expo push token: {pushToken}</Text>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          Title: {notification && notification.request.content.title}{' '}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{' '}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(pushToken);
        }}
      />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
