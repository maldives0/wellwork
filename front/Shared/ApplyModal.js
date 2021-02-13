import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {BasicButton, BorderButton} from './BasicStyles';
const ApplyModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.buttonRowLayout}>
              <BorderButton onPress={() => {}}>
                <Text style={styles.buttonText}>연차</Text>
              </BorderButton>
              <BorderButton onPress={() => {}}>
                <Text style={styles.buttonText}>출장</Text>
              </BorderButton>
            </View>
            <View style={styles.buttonRowLayout}>
              <BorderButton onPress={() => {}}>
                <Text style={styles.buttonText}>반차</Text>
              </BorderButton>
              <BorderButton onPress={() => {}}>
                <Text style={styles.buttonText}>병가</Text>
              </BorderButton>
            </View>
            <View style={styles.buttonRowLayout}>
              <BorderButton onPress={() => {}}>
                <Text style={styles.buttonText}>예비군</Text>
              </BorderButton>
              <BorderButton onPress={() => {}}>
                <Text style={styles.buttonText}>기타</Text>
              </BorderButton>
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
  },
  buttonText: {
    fontSize: 20,
  },
});

export default ApplyModal;
