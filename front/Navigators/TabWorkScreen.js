import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Platform} from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';
import {BasicButton} from '../Shared/BasicStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DatePicker from '../Shared/DatePicker';
import SignInTimePicker from '../Shared/SignInTimePicker';
import SignOutTimePicker from '../Shared/SignOutTimePicker';
import moment from 'moment';
import 'moment/locale/ko';
import 'moment-timezone';

const TabWorkScreen = ({navigation, route}) => {
  moment.locale('ko');
  moment.tz.setDefault('Asia/Seoul');
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [isWorking, setIsWorking] = useState(true);

  const [signInTime, setSignInTime] = useState(new Date());
  const [signOutTime, setSignOutTime] = useState(new Date());

  let nowTime = new Date();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.datePickerLayout}>
          <DatePicker />
        </View>
        <View style={styles.timePickerLayout}>
          <SignInTimePicker
            type="출근시간"
            isSignIn={isSignIn}
            signInTime={signInTime}
          />
          <AntDesign size={25} name="arrowright" color="#348F50" />
          <SignOutTimePicker type="퇴근시간" isWorking={isWorking} signOutTime={signOutTime} />
        </View>
        <View style={styles.viewLayout}>
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
            onPress={() => {
              setIsStopwatchStart(true);
              setResetStopwatch(false);
              setIsSignIn(true);
              setIsWorking(true);
              setSignInTime(nowTime);
            }}>
            <Text>
              <Text style={styles.buttonText}>출근하기</Text>
            </Text>
          </BasicButton>
          <BasicButton
            onPress={() => {
              setIsStopwatchStart(false);
              setResetStopwatch(true);
              setIsSignIn(false);
              setIsWorking(false)
              setSignOutTime(nowTime);
            }}>
            <Text style={styles.buttonText}>퇴근하기</Text>
          </BasicButton>

          {isSignIn ? (
            !isStopwatchStart ? (
              <BasicButton
                onPress={() => {
                  setIsStopwatchStart(!isStopwatchStart);
                  setResetStopwatch(false);
                }}>
                <Text style={styles.buttonText}>돌아오기</Text>
              </BasicButton>
            ) : (
              <BasicButton
                onPress={() => {
                  setIsStopwatchStart(!isStopwatchStart);
                  setResetStopwatch(false);
                }}>
                <Text style={styles.buttonText}>자리비우기</Text>
              </BasicButton>
            )
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datePickerLayout: {
  ...Platform.select({
    ios:{
      paddingTop: 6,
    },
    android:{
      marginBottom:36,
      padding: 16,
    }
  }),  
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#348F50',
    borderStyle: 'solid',
    borderTopWidth: 1,
    
  },
  timePickerLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLayout: {
    borderColor: '#348F50',
    borderStyle: 'solid',
    borderTopWidth: 1,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 36,
    marginBottom: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});

const options = {
  container: {
    padding: 5,
    borderRadius: 5,
    width: '90%',
    alignItems: 'center',
    marginBottom: 26,
  },
  text: {
    fontSize: 50,
    color: '#000',
    marginBottom: 20,
  },
};
export default TabWorkScreen;
