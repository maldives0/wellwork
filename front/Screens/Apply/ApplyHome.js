import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Modal,
  Button,
} from 'react-native';

import WorkCalendar from '../../Shared/WorkCalendar';
import ApplyModal from '../../Shared/ApplyModal';

const ApplyHome = ({navigation, route}) => {
  const [nickname, setNickname] = useState('momo');
  const [annualLeave, setAnnualLeave] = useState(12);
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.viewText}>
            현재 {nickname}님이 사용할 수 있는{'\n'}
            연차일은 <Text style={{fontSize: 30}}>{annualLeave}</Text>일 입니다.
          </Text>
        </View>
        <ApplyModal screenName="ApplyForm" />
        <WorkCalendar />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    marginTop: 20,
  },
  viewText: {
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
  },
});
export default ApplyHome;
