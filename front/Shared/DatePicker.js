//ios 설정을 하지 않아 후에 설정 필요함 https://github.com/react-native-datetimepicker/datetimepicker
import {TouchableOpacity, StyleSheet, View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import React, {useState} from 'react';

import moment from 'moment';
import 'moment/locale/ko';
import {
  ANDROID_MODE,
  IOS_MODE,
  ANDROID_DISPLAY,
  IOS_DISPLAY,
} from '../Redux/constants';

const MODE_VALUES = Platform.select({
  ios: Object.values(IOS_MODE),
  android: Object.values(ANDROID_MODE),
  windows: [],
});
const DISPLAY_VALUES = Platform.select({
  ios: Object.values(IOS_DISPLAY),
  android: Object.values(ANDROID_DISPLAY),
  windows: [],
});

const Calender = () => {
  moment.locale('ko');
  const [date, setDate] = useState(new Date());

  const [mode, setMode] = useState(MODE_VALUES[0]);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setShow(Platform.OS === 'ios');

    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            showDatepicker();
          }}>
          <Text style={styles.buttonText}>{moment.utc(date).format('LL')}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}></View>
      {show && (
        <DateTimePicker
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLayout: {
    marginTop: 16,
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 35,
    textAlignVertical: 'center',
  },
  infoText: {},
  iOsPicker: {
    flex: 1,
  },
  viewText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
export default Calender;
