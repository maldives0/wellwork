import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BasicButton, BorderButton} from './BasicStyles';
const ApplyModal = ({screenName}) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const ApplyType = ['연차', '반차', '출장', '병가', '예비군', '기타'];
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.buttonRowLayout}>
              {ApplyType.map((type, i) => {
                return (
                  <BorderButton
                    key={type + i}
                    onPress={() => {
                      navigation.navigate(screenName, {
                        type,
                      });
                      setModalVisible(!modalVisible);
                    }}>
                    <Text style={styles.buttonText}>{type}</Text>
                  </BorderButton>
                );
              })}
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.cancelTextStyle}>취소</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <BasicButton>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>근태신청하기</Text>
        </Pressable>
      </BasicButton>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  cancelTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonRowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  buttonText: {
    fontSize: 20,
  },
});

export default ApplyModal;
