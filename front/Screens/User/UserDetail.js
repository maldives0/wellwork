import React, { useCallback } from "react";
import { View, Image, StyleSheet } from "react-native";
import gravatar from "gravatar";
import { ProfileInfo } from "@/Components/BasicStyles";
import GoToButton from "@/Components/GoToButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
const back_url = "http://192.168.0.20:3000/api";

const UserDetail = ({ navigation, route }) => {
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
      //axios
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
          uri: gravatar.url(userData?.email, { s: "20px", d: "retro" }, true),
        }}
      />
      <ProfileInfo>{userData?.nickname}</ProfileInfo>
      <View style={styles.info}>
        <GoToButton color={"#000"} size={20} screenName="개인정보 변경하기" />

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
    marginTop: 30,
    alignItems: "flex-start",
  },
});
export default UserDetail;
