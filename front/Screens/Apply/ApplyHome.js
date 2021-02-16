import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,

} from 'react-native';

import WorkCalendar from '../../Shared/WorkCalendar';
import ApplyModal from '../../Shared/ApplyModal';

const ApplyHome = ({navigation, route}) => {
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
          <ApplyModal screenName="ApplyForm" />
        </View>
        <View style={styles.iosOnly}>      
        <WorkCalendar />
        </View>
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
  iosOnly:{
    paddingTop: (Platform.OS === 'ios') && 36
  },
  viewText: {
fontSize: (Platform.OS === 'ios') ? 20 : 15,
textAlign: 'center',
marginTop: 10,
  },
});
export default ApplyHome;
