import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const SignInTimePicker = (props) => {
  let isWorking = props.isWorking;
  let signOutTime = props.signOutTime;

  const [endWorkTime, setEndWorkTime] = useState(signOutTime);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(() => {
    if (signOutTime) {
      setEndWorkTime(props.signOutTime);
    }
  }, [signOutTime]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    // console.warn("A date has been picked: ", selectedDate);
    const currentDate = selectedDate || endWorkTime;
    setEndWorkTime(currentDate);
    hideDatePicker();
  };

  return (
    <View style={{ marginBottom: 16 }}>
      <View>
        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={() => {
            showDatePicker();
          }}
        >
          <Text style={styles.typeInfo}>{props.type}</Text>
          <Text style={styles.dateTimeText}>
            {dayjs(
              isWorking
                ? endWorkTime.getTime() + 9 * 60 * 60 * 1000
                : endWorkTime.getTime(),
            ).format('A hh:mm')}
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
    ...Platform.select({
      android: {
        marginTop: 16,
        flex: 2,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }),
  },
  typeInfo: {
    textAlign: 'center',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  dateTimeText: {
    fontSize: 34,
    fontWeight: 'normal',
    padding: 16,
  },
  viewText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
export default SignInTimePicker;
