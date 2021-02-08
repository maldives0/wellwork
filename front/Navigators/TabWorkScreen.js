import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
} from 'react-native';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import BasicButton from '../Shared/BasicButton';
const TabWorkScreen = ({navigation, route}) => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
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
          }}>
          <Text style={styles.buttonText}>
            <Text style={styles.buttonText}>출근하기</Text>
          </Text>
        </BasicButton>
        <BasicButton
          onPress={() => {
            setIsStopwatchStart(false);
            setResetStopwatch(true);
          }}>
          <Text style={styles.buttonText}>퇴근하기</Text>
        </BasicButton>

        {!isStopwatchStart ? (
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
        )}
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
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
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
