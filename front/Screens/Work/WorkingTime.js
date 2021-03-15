import React, { useState, useCallback, useEffect } from "react";
import { SafeAreaView, View, Text, StyleSheet, Platform } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";
import { BasicButton } from "@/Components/BasicStyles";
import AntDesign from "react-native-vector-icons/AntDesign";
import DatePicker from "@/Components/DatePicker";
import SignInTimePicker from "@/Components/SignInTimePicker";
import SignOutTimePicker from "@/Components/SignOutTimePicker";
import LogoTitle from "@/Components/LogoTitle";
import LocalNotification from "@/utils/LocalNotification";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

const StackWorkScreen = ({ navigation, route }) => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignOut, setIsSignOut] = useState(false);
  const [signInTime, setSignInTime] = useState(new Date());
  const [signOutTime, setSignOutTime] = useState(new Date());

  const onSubmitWorkingTime = useCallback((start, end) => {
    console.log(
      "출근시간:",
      dayjs(start).format("A hh:mm:ss"),
      "퇴근시간:",
      dayjs(end).format("A hh:mm:ss")
    );
  }, []);
  useEffect(() => {
    if (isSignIn) {
      LocalNotification.register(
        dayjs(signInTime.getTime() + 9 * 60 * 60 * 1000).format("A hh:mm:ss")
      );
    }

    return () => LocalNotification.unregister();
  }, [isSignIn]);
  return (
    <SafeAreaView style={styles.container}>
      <LogoTitle />
      <View style={styles.viewContainer}>
        <View style={styles.datePickerLayout}>
          <DatePicker />
        </View>
        <View style={styles.timePickerLayout}>
          <SignInTimePicker
            type="출근시간"
            isSignIn={isSignIn}
            signInTime={signInTime}
            setSignInTime={setSignInTime}
          />
          <AntDesign size={25} name="arrowright" color="#348F50" />
          <SignOutTimePicker
            type="퇴근시간"
            isSignOut={isSignOut}
            signOutTime={signOutTime}
            setSignOutTime={setSignOutTime}
          />
        </View>
        <View style={styles.viewLayout}>
          <Text style={styles.title}>오늘 나의 근무시간</Text>
          {isSignOut ? (
            <View>
              <View style={styles.resultLayout}>
                <SignInTimePicker
                  type="출근시간"
                  isSignIn={isSignIn}
                  signInTime={signInTime}
                  setSignInTime={setSignInTime}
                />
                <AntDesign size={25} name="arrowright" color="#348F50" />
                <SignOutTimePicker
                  type="퇴근시간"
                  isSignOut={isSignOut}
                  signOutTime={signOutTime}
                  setSignOutTime={setSignOutTime}
                />
              </View>
              <View style={{ alignItems: "center" }}>
                <BasicButton
                  onPress={() => {
                    onSubmitWorkingTime(signInTime, signOutTime);
                  }}
                >
                  <Text style={styles.buttonText}>시간바꾸기</Text>
                </BasicButton>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.title}>현재 근무시간</Text>
              <Stopwatch
                laps
                // msecs
                start={isStopwatchStart}
                //To start
                reset={resetStopwatch}
                //To reset
                options={options}
                //options for the styling
                getTime={(time) => {
                  // console.log('stopwacth time:', time);
                }}
              />
              <BasicButton
                style={{ marginBottom: 16 }}
                onPress={() => {
                  setIsStopwatchStart(true);
                  setResetStopwatch(false);
                  setIsSignIn(true);
                  setIsSignOut(false);
                  setSignInTime(signInTime);
                }}
              >
                <Text>
                  <Text style={styles.buttonText}>출근하기</Text>
                </Text>
              </BasicButton>
              <BasicButton
                onPress={() => {
                  setIsStopwatchStart(false);
                  setResetStopwatch(true);
                  setIsSignIn(false);
                  setIsSignOut(true);
                  setSignOutTime(signOutTime);
                  onSubmitWorkingTime(signInTime, signOutTime);
                }}
              >
                <Text style={styles.buttonText}>퇴근하기</Text>
              </BasicButton>
              {isSignIn ? (
                !isStopwatchStart ? (
                  <BasicButton
                    onPress={() => {
                      setIsStopwatchStart(!isStopwatchStart);
                      setResetStopwatch(false);
                    }}
                  >
                    <Text style={styles.buttonText}>돌아오기</Text>
                  </BasicButton>
                ) : (
                  <BasicButton
                    onPress={() => {
                      setIsStopwatchStart(!isStopwatchStart);
                      setResetStopwatch(false);
                    }}
                  >
                    <Text style={styles.buttonText}>자리비우기</Text>
                  </BasicButton>
                )
              ) : null}
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
  },
  datePickerLayout: {
    ...Platform.select({
      ios: {
        paddingBottom: 30,
      },
      android: {
        padding: 6,
      },
    }),
  },

  timePickerLayout: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 26,
  },
  resultLayout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 26,
  },
  viewLayout: {
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 36,
    marginBottom: 16,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
  },
});

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginBottom: 16,
  },
  text: {
    fontSize: 50,
    color: "#000",
    ...Platform.select({
      ios: {
        marginBottom: 20,
      },
    }),
  },
};
export default StackWorkScreen;
