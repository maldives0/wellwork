import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import WorkCalender from '../Shared/WorkCalender';
import ApplyModal from '../Shared/ApplyModal';

const TabUserScreen = ({navigation, route}) => {
  const [nickname, setNickname] = useState('momo');
  const [annualLeave, setAnnualLeave] = useState(12);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.viewText}>
            현재 {nickname}님이 사용할 수 있는{'\n'}
            연차일은 <Text style={{fontSize: 30}}>{annualLeave}</Text>일 입니다.
          </Text>
        </View>
        <ApplyModal />
        <WorkCalender />
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
export default TabUserScreen;
