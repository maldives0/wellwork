import React, { useCallback } from "react";
import { View, Image, StyleSheet } from "react-native";
import gravatar from "gravatar";
import { ProfileInfo } from "./BasicStyles";
import initialUser from "../assets/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
const back_url = "http://192.168.0.20:3000/api";

const UserProfile = ({ navigation, route }) => {
  const { data: userData } = useSWR(`${back_url}/users`, fetcher);

  const onChangePassword = useCallback(() => {
    console.warn("hi");
  }, []);
  const onChangeUserInfo = useCallback(() => {
    console.warn("hi");
  }, []);
  const onPressLogout = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("isLogin");
    } catch (err) {
      console.dir(err);
    }
    console.log("Done.");
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{
          uri: gravatar.url(
            "momo@aiskorea.co.kr",
            { s: "20px", d: "retro" },
            true
          ),
        }}
      />
      <ProfileInfo>{userData.nickname}</ProfileInfo>
      <View style={styles.info}>
        <ProfileInfo onPress={() => navigation.navigate("개인정보 변경하기")}>
          개인정보 변경하기
        </ProfileInfo>

        <ProfileInfo onPress={() => onPressLogout()}>로그아웃</ProfileInfo>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  info: {
    paddingTop: 50,
    alignItems: "flex-start",
  },
});
export default UserProfile;
