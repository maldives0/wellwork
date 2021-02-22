import React, { useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

import AntDesign from "react-native-vector-icons/AntDesign";
import useInput from "../../hooks/useInput";
import { BasicButton } from "../../Shared/BasicStyles";
function RegisterForm({ route, navigation }) {
  const [email, setEmail] = useState("@aiskorea.co.kr");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [misMatchError, setMisMatchError] = useState(false);
  const misMatchErrorMessage = useCallback(() => {}, []);

  const onSubmit = useCallback(() => {
    try {
      if (email === "@aiskorea.co.kr") {
        setEmailErrorMessage("이메일 주소를 입력해주세요.");
      } else {
        setEmailErrorMessage("");
      }
      if (!password || password.trim()) {
        setPasswordErrorMessage("비밀번호를 입력해주세요.");
      }
      console.warn(password, passwordCheck);
      setMisMatchError(password !== passwordCheck);

      // setEmail("@aiskorea.co.kr");
      // setPassword("");
      // setPasswordCheck("");
    } catch (err) {
      console.dir(err);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formLayout}>
        <Input
          clearTextOnFocus={false}
          autoCapitalize="none"
          style={styles.inputLayout}
          value={email}
          leftIcon={{ type: "antdesign", name: "mail" }}
          onChange={(email) => setEmail(email)}
          errorStyle={{ color: "red", fontSize: 16 }}
          errorMessage={emailErrorMessage}
          placeholder="이메일"
        />
      </View>
      <View style={styles.formLayout}>
        <Input
          autoCapitalize="none"
          style={styles.inputLayout}
          value={password}
          rightIcon={{ type: "antdesign", name: "eyeo" }}
          leftIcon={{ type: "antdesign", name: "key" }}
          onChange={(pw) => setPassword(pw)}
          errorStyle={{ color: "red", fontSize: 16 }}
          errorMessage={misMatchError ? "oops" : ""}
          placeholder="비밀번호"
        />
      </View>

      <View style={styles.formLayout}>
        <Input
          autoCapitalize="none"
          // clearTextOnFocus={true}
          style={styles.inputLayout}
          value={passwordCheck}
          rightIcon={{ type: "antdesign", name: "eyeo" }}
          leftIcon={{ type: "antdesign", name: "key" }}
          onChange={(pw) => setPasswordCheck(pw)}
          errorStyle={{ color: "red", fontSize: 16 }}
          errorMessage={misMatchError ? "oops" : ""}
          placeholder="비밀번호 재입력"
        />
      </View>
      <View style={styles.buttonAreaLayout}>
        <BasicButton onPress={onSubmit}>
          <Text style={styles.buttonText}>로그인</Text>
        </BasicButton>
      </View>
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
  btnKakaoLogin: {
    height: 48,
    width: 240,
    alignSelf: "center",
    backgroundColor: "#F8E71C",
    borderRadius: 0,
    borderWidth: 0,
  },
});

export default RegisterForm;
