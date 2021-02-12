import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Calender from '../Shared/Calender';
import TimePicker from '../Shared/TimePicker';
import BasicButton from '../Shared/BasicButton';
const TabUserScreen = ({navigation, route}) => {
  const [nickname, setNickname] = useState('momo');
  const [annualLeave, setAnnualLeave] = useState(12);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{marginBottom: 16}}>
          <Calender />
        </View>
        <View style={styles.buttonLayout}>
          <TimePicker type="출근" />
          <AntDesign size={25} name="arrowright" color="#348F50" />
          <TimePicker type="퇴근" />
        </View>
        <View>
          <Text style={styles.viewText}>
            현재 {nickname}님이 사용할 수 있는{'\n'}
            연차일은 <Text style={{fontSize: 30}}>{annualLeave}</Text>일 입니다.
          </Text>
        </View>
        <View style={styles.buttonLayout}>
          <BasicButton onPress={() => {}}>
            <Text>
              <Text style={styles.buttonText}>연차신청</Text>
            </Text>
          </BasicButton>
          <BasicButton onPress={() => {}}>
            <Text>
              <Text style={styles.buttonText}>출장신청</Text>
            </Text>
          </BasicButton>
        </View>
        <View style={styles.buttonLayout}>
          <BasicButton onPress={() => {}}>
            <Text>
              <Text style={styles.buttonText}>반차신청</Text>
            </Text>
          </BasicButton>
          <BasicButton onPress={() => {}}>
            <Text>
              <Text style={styles.buttonText}>병가신청</Text>
            </Text>
          </BasicButton>
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
  buttonLayout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});
export default TabUserScreen;
