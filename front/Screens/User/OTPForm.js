import React, { useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import firebase from "firebase";
import AntDesign from "react-native-vector-icons/AntDesign";
import GoToButton from "../../Shared/GoToButton";
import { BasicButton } from "../../Shared/BasicStyles";
function OTPForm({ route, navigation }) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [codeErrorMessage, setCodeErrorMessage] = useState("");

  const onSubmitPhone = useCallback(async () => {
    try {
      if (!phoneErrorMessage) {
        setPhoneErrorMessage("전화번호를 확인해주세요.");
      }
      // await axios.post(`${Root_URL}/createUser`,{
      // phone :  phone, code: code
      // });
      // await axios.post(`${Root_URL}/requestOneTimePassword`,{
      // phone :  phone, code: code
      // });
    } catch (err) {
      console.dir(err);
    }
  }, []);
  const onSubmitCode = useCallback(async () => {
    try {
      if (!codeErrorMessage) {
        setCodeErrorMessage("확인코드를 확인해주세요.");
      }

      // let {data} = await axios.post(`${Root_URL}/verifyOneTimePassword`,{
      // phone :  phone, code: code
      // });
      // firbase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.dir(err);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formLayout}>
        <Input
          style={styles.inputLayout}
          value={phone}
          leftIcon={{ type: "antdesign", name: "mobile1" }}
          onChangeText={(phone) => setPhone(phone)}
          errorStyle={{ color: "red", fontSize: 16 }}
          errorMessage={phoneErrorMessage}
          placeholder="전화번호"
        />
      </View>
      <View style={styles.buttonAreaLayout}>
        <BasicButton onPress={onSubmitPhone}>
          <Text style={styles.buttonText}>확인</Text>
        </BasicButton>
      </View>
      <View style={styles.formLayout}>
        <Input
          style={styles.inputLayout}
          value={code}
          onChangeText={(phone) => setCode(phone)}
          leftIcon={{ type: "antdesign", name: "questioncircleo" }}
          errorStyle={{ color: "red", fontSize: 16 }}
          errorMessage={codeErrorMessage}
          placeholder="코드번호"
        />
      </View>
      <View style={styles.buttonAreaLayout}>
        <BasicButton onPress={onSubmitCode}>
          <Text style={styles.buttonText}>확인</Text>
        </BasicButton>
      </View>
      {/* <GoToButton screenName="프로필" /> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  inputLayout: {
    padding: 10,
    fontSize: 20,
  },
  formLayout: {
    justifyContent: "center",

    flexDirection: "row",
    marginBottom: 6,
  },
  buttonAreaLayout: {
    fontSize: 20,
    flexDirection: "row-reverse",
    marginBottom: 26,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});

export default OTPForm;
