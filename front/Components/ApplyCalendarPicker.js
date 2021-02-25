import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import { BasicButton, BorderButton } from './BasicStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ApplyCalendarPicker = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  // const [isReset, setIsReset] = useState(false);
  const startDate = selectedStartDate ? selectedStartDate.toString() : '';
  const endDate = selectedEndDate ? selectedEndDate.toString() : '';
  const result = (res) => moment(res).format('LL');

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };
  const onSubmit = () => {
    if (!startDate || !endDate) {
      Alert.alert('달력에서 신청일을 선택하세요');
    }
  };
  const onReset = () => {
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.result}>
          시작일: {startDate ? result(startDate) : '첫번째 클릭'}
        </Text>
        <Text style={styles.result}>
          종료일: {endDate ? result(endDate) : '두번째 클릭'}
        </Text>
      </View>
      <View style={styles.calenderLayout}>
        <CalendarPicker
          // scrollable
          allowRangeSelection={true}
          weekdays={['일', '월', '화', '수', '목', '금', '토']}
          months={[
            '1월',
            '2월',
            '3월',
            '4월',
            '5월',
            '6월',
            '7월',
            '8월',
            '9월',
            '10월',
            '11월',
            '12월',
          ]}
          previousTitle={<AntDesign name="left" size={20} color="#50cebb" />}
          nextTitle={<AntDesign name="right" size={20} color="#50cebb" />}
          todayBackgroundColor="#c8f7f0"
          selectedDayColor="#50cebb"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            color: '#000000',
            fontSize: 20,
          }}
          onDateChange={onDateChange}
        />
      </View>
      <View style={styles.buttonLayout}>
        <BasicButton onPress={() => onSubmit()}>
          <Text style={styles.buttonText}>신청하기</Text>
        </BasicButton>
        <BasicButton onPress={() => onReset()}>
          <Text style={styles.buttonText}>새로고침</Text>
        </BasicButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calenderLayout: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 36,

    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 20,
    margin: 6,
  },
  info: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 15,
  },
  buttonLayout: {
    flexDirection: 'row',
    marginTop: 26,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});
export default ApplyCalendarPicker;
