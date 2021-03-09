import React, { useCallback } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import gravatar from 'gravatar';
import { ProfileInfo } from './BasicStyles';
import initialUser from '../assets/user';

import useSWR from 'swr';
import fetcher from '../utils/fetcher';
const Back_Url = 'http://localhost:3001';

const UserProfile = ({ navigation, route }) => {
  // const { data: userData } = useSWR(`${Back_Url}/users`, fetcher);
  // const { data, error } = useSWR('globalState', { initialData: initialUser });
  // console.log('1:', data.users[0].nickname, data.me);

  const onChangePassword = useCallback(() => {
    console.warn('hi');
  }, []);
  const onChangeUserInfo = useCallback(() => {
    console.warn('hi');
  }, []);
  const onPressLogout = useCallback(() => {
    console.warn('hi');
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={styles.photo}
        source={{
          uri: gravatar.url(
            'momo@aiskorea.co.kr',
            { s: '20px', d: 'retro' },
            true,
          ),
        }}
      />
      <ProfileInfo>안녕</ProfileInfo>
      <View style={styles.info}>
        <ProfileInfo onPress={() => onChangeUserInfo()}>
          개인정보 수정하기
        </ProfileInfo>
        <ProfileInfo onPress={() => onChangePassword()}>
          비밀번호 변경하기
        </ProfileInfo>
        <ProfileInfo onPress={() => onPressLogout()}>로그아웃</ProfileInfo>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  info: {
    paddingTop: 50,
  },
});
export default UserProfile;
