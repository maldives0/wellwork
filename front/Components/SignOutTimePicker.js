import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

const SignOutTimePicker = (props) => {
  let isSignOut = props.isSignOut;
  let signOutTime = props.signOutTime;
  let setSignOutTime = props.setSignOutTime;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(() => {
    if (isSignOut) {
      setSignOutTime(new Date());
    }
  }, [isSignOut]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    // console.warn("A date has been picked: ", selectedDate);
    const currentDate = selectedDate || signOutTime;
    setSignOutTime(currentDate);
    hideDatePicker();
  };

  return (
    <View>
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
              !isSignOut
                ? signOutTime.getTime() + 9 * 60 * 60 * 1000
                : signOutTime.getTime()
            ).format("A hh:mm:ss")}
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLayout: {
    ...Platform.select({
      android: {
        justifyContent: "center",
        alignItems: "center",
      },
    }),
  },
  typeInfo: {
    textAlign: "center",
    fontSize: 15,
    textAlignVertical: "center",
  },
  dateTimeText: {
    fontSize: 34,
    fontWeight: "normal",
    padding: 16,
  },
});
export default SignOutTimePicker;
