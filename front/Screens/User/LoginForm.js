import React, { useState, useCallback } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";
import firebase from "firebase";
import AntDesign from "react-native-vector-icons/AntDesign";
import GoToButton from "../../test/GoToButton";
import { BasicButton } from "../../Shared/BasicStyles";
import KakaoLogins, { KAKAO_AUTH_TYPES } from "@react-native-seoul/kakao-login";
import NativeButton from "apsl-react-native-button";

if (!KakaoLogins) {
  console.error("Module is Not Linked");
}
const logCallback = (log, callback) => {
  console.log(log);
  callback;
};
const TOKEN_EMPTY = "token has not fetched";
const PROFILE_EMPTY = {
  id: "profile has not fetched",
  email: "profile has not fetched",
  profile_image_url: "",
};

function LoginForm({ route, navigation }) {
  const [email, setEmail] = useState("@aiskorea.co.kr");
  const [password, setPassword] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [token, setToken] = useState(TOKEN_EMPTY);
  const [profile, setProfile] = useState(PROFILE_EMPTY);

  const onSubmit = useCallback(async () => {
    try {
      if (!emailErrorMessage) {
        setEmailErrorMessage("이메일 주소를 확인해주세요.");
      }
      if (!passwordErrorMessage) {
        setPasswordErrorMessage("비밀번호를 확인해주세요.");
      }
    } catch (err) {
      console.error(err);
    }
  }, []);
  const kakaoLogin = () => {
    logCallback("Login Start", setLoginLoading(true));

    KakaoLogins.login([KAKAO_AUTH_TYPES.Talk, KAKAO_AUTH_TYPES.Account])
      .then((result) => {
        setToken(result.accessToken);
        logCallback(
          `Login Finished:${JSON.stringify(result)}`,
          setLoginLoading(false)
        );
      })
      .catch((err) => {
        if (err.code === "E_CANCELLED_OPERATION") {
          logCallback(`Login Cancelled:${err.message}`, setLoginLoading(false));
        } else {
          logCallback(
            `Login Failed:${err.code} ${err.message}`,
            setLoginLoading(false)
          );
        }
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formLayout}>
        <Input
          style={styles.inputLayout}
          value={email}
          leftIcon={{ type: "antdesign", name: "mail" }}
          onChangeText={(email) => setEmail(email)}
          errorStyle={{ color: "red", fontSize: 16 }}
          errorMessage={emailErrorMessage}
          placeholder="이메일"
        />
      </View>
      <View style={styles.formLayout}>
        <Input
          style={styles.inputLayout}
          value={password}
          rightIcon={{ type: "antdesign", name: "eyeo" }}
          leftIcon={{ type: "antdesign", name: "key" }}
          onChangeText={(password) => setPassword(password)}
          errorStyle={{ color: "red", fontSize: 16 }}
          errorMessage={passwordErrorMessage}
          placeholder="비밀번호"
        />
      </View>
      <View style={styles.buttonAreaLayout}>
        <BasicButton onPress={onSubmit}>
          <Text style={styles.buttonText}>로그인하기</Text>
        </BasicButton>
      </View>
      <GoToButton screenName="회원가입하기" />
      <GoToButton screenName="휴대폰번호로 로그인하기" />
      <GoToButton screenName="카카오로 로그인하기" />
      <NativeButton
        isLoading={loginLoading}
        onPress={kakaoLogin}
        activeOpacity={0.5}
        style={styles.btnKakaoLogin}
        textStyle={styles.txtKakaoLogin}
      >
        LOGIN
      </NativeButton>
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

export default LoginForm;
