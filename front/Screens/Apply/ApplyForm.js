import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
  Text,
  View,
} from 'react-native';
import ApplyCalendarPicker from '../../Shared/ApplyCalendarPicker';
import GoToButton from '../../Shared/GoToButton';
function ApplyForm({route, navigation}) {
  const type = route.params.type;
  let str = JSON.stringify(type);

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.title}>
            신청유형: {str.substring(1, str.length - 1)}
          </Text>
          <ApplyCalendarPicker />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,

    marginBottom: 10,
  },
});

export default ApplyForm;
