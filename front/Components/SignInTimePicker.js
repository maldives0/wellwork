import {TouchableOpacity, StyleSheet, View, Text, Platform} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import 'moment-timezone';

const SignInTimePicker = (props) => {
  // moment.locale('ko');
  // moment.tz.setDefault('Asia/Seoul');
  let signInTime = props.signInTime;
  let isSignIn = props.isSignIn;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [startWorkTime, setStartWorkTime] = useState(signInTime);

  useEffect(() => {
    if (signInTime) {
      setStartWorkTime(props.signInTime);
    }
  }, [signInTime, isSignIn ]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    // console.warn("A date has been picked: ", selectedDate);
    const currentDate = selectedDate || startWorkTime;
    setStartWorkTime(currentDate);
    hideDatePicker();
  };

    return (
    <View style={{marginBottom: 16}}>
      <View>
        <TouchableOpacity
          style={styles.buttonLayout}
          onPress={() => {
            showDatePicker();
          }}>        
          <Text style={styles.typeInfo}>
            {props.type}
            </Text>
            <Text style={styles.dateTimeText}>
              {moment(startWorkTime.getTime()).utc(startWorkTime).format('LT')}
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
          android:{
        marginTop: 16,
        flex: 2,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }
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
    padding:16
  },
  viewText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
});
export default SignInTimePicker;