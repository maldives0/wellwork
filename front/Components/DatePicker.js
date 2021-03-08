//ios 설정을 하지 않아 후에 설정 필요함 https://github.com/react-native-datetimepicker/datetimepicker
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';

import dayjs from 'dayjs';

const DataPicker = () => {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    // console.warn("A date has been picked: ", selectedDate);
    const currentDate = selectedDate || date;
    setDate(currentDate);
    hideDatePicker();
  };
  return (
    <View>
      <View style={styles.iosLayout}>
        <TouchableOpacity
          onPress={() => {
            showDatePicker();
          }}
        >
          <Text style={styles.buttonText}>
            {dayjs(date).format('YYYY년 MM월 DD일')}
          </Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: 25,
    textAlignVertical: 'center',
  },
  infoText: {},

  iosLayout: {
    padding: 36,
  },
});
export default DataPicker;
