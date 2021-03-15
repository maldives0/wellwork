import { useState } from "react";
import { AppState, Platform } from "react-native";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

const _handleAppStateChange = (nextAppState) => {
  if (nextAppState === "active") {
    _registerLocalNotification();
  }
};

const _registerLocalNotification = () => {
  PushNotification.setApplicationIconBadgeNumber(0);
  PushNotification.cancelAllLocalNotifications();

  let nextHour = new Date();
  nextHour.setDate(nextHour.getDate() + 1);
  nextHour.setHours(nextHour.getHours() - 1);

  PushNotification.createChannel(
    {
      channelId: "com.front_rn", // (required)
      channelName: "wellwork", // (required)
      channelDescription: "alarm channel for wellwork", // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
  );

  PushNotification.localNotificationSchedule({
    /* Android Only Properties */
    channelId: "com.front_rn",
    vibrate: true,
    vibration: 300,
    priority: "hight",
    visibility: "public",
    importance: "hight",

    /* iOS and Android properties */
    message: "퇴근버튼을 누르셨나요?", // (required)
    playSound: true,
    number: 1,
    actions: '["OK"]',

    // for production
    // repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
    date: nextHour,

    // test to trigger each miniute
    // repeatType: 'minute',
    // date: new Date(Date.now()),

    // test to trigger one time
    // date: new Date(Date.now()+ 20* 1000),
  });
};
export default {
  register: async (time) => {
    console.log("time", time);
    // setAlarmTime(time);
    PushNotification.configure({
      onNotification: function (notification) {
        console.log("LOCAL NOTIFICATION ==>", notification);
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === "ios",
    });

    _registerLocalNotification();

    AppState.addEventListener("change", _handleAppStateChange);
  },
  unregister: () => {
    AppState.removeEventListener("change", _handleAppStateChange);
  },
};
