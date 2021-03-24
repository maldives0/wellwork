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

const SignInTimePicker = (props) => {
  let signInTime = props.signInTime;
  let isSignIn = props.isSignIn;
  let setSignInTime = props.setSignInTime;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(() => {
    if (isSignIn) {
      setSignInTime(new Date());
    }
  }, [isSignIn]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    // console.warn("A date has been picked: ", selectedDate);
    const currentDate = selectedDate || signInTime;
    setSignInTime(currentDate);
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
            {dayjs(signInTime.getTime()).format("A hh:mm")}
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
  viewText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
});
export default SignInTimePicker;
