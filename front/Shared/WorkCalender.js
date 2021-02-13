import React, {useState, useCallback} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';
LocaleConfig.locales['ko'] = {
  monthNames: [
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
  ],
  monthNamesShort: [
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
  ],
  dayNames: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  today: '오늘',
};
LocaleConfig.defaultLocale = 'ko';
const WorkCalender = () => {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const sickLeave = {key: 'sickLeave', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'pink'};
  const halfWorkout = {key: 'halfWorkout', color: 'yellow'};
  const [selected, setSelected] = useState('');
  const [markedDate, setMarkedDate] = useState({});
  let markedDatesArr = [];
  const onDayPress = (day) => {
    console.log('selected day', day);
    setSelected(day.dateString);
  };

  // const onDayPress = useCallback(
  //   (day) => {
  //     console.log('selected day', day);
  //     setSelected(day.dateString);
  //   },
  //   [day],
  // );

  return (
    <SafeAreaView style={styles.header}>
      <Calendar
        monthFormat={'yyyy년 MM월'}
        enableSwipeMonths={true}
        horizontal={true}
        pagingEnabled={true}
        calendarWidth={'150%'}
        // Collection of dates that have to be colorgreened in a special way. Default = {}

        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            color: '#50cebb',
            selectedTextColor: 'white',
          },
        }}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        markingType={'period'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
    marginTop: 36,
    backgroundColor: '#fff',
  },
});

export default WorkCalender;
