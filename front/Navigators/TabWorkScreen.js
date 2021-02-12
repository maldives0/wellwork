import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Stopwatch} from 'react-native-stopwatch-timer';
import BasicButton from '../Shared/BasicButton';
const TabWorkScreen = ({navigation, route}) => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.title}>근무현황</Text>
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
            console.log(time);
          }}
        />
        <BasicButton
          onPress={() => {
            setIsStopwatchStart(true);
            setResetStopwatch(false);
            setIsSignIn(true);
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
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
  },
  text: {
    fontSize: 50,
    color: '#000',
    marginBottom: 20,
  },
};
export default TabWorkScreen;
