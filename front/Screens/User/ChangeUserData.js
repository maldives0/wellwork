import React, { useState, useCallback } from "react";

import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import axios from "axios";
import useSWR, { mutate } from "swr";
import initialUser from "@/assets/store";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Picker,
} from "native-base";
import DropDownPicker from "react-native-dropdown-picker";
import useInput from "@/hooks/useInput";
import DatePicker from "@/Components/DatePicker";
import { BasicButton, CloseButtonCoord } from "@/Components/BasicStyles";
import AntDesign from "react-native-vector-icons/AntDesign";
const ChangeUserData = ({ navigation, route }) => {
  const [phone, onChangePhone, onResetPhone, setPhone] = useInput("");
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDeptValueChange = useCallback((item) => {
    setSelectedDept(item.value);
  }, []);
  const onSubmit = async () => {
    try {
      console.log(phone, selectedDept, selectedDate.toString().substr(4, 12));
      setPhone("");
      setSelectedDept(null);
      setSelectedDate(new Date());
      navigation.navigate("로그인");
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <Container style={styles.container}>
      <Content padder>
        <Form style={styles.formLayout}>
          <View style={styles.inputLayout}>
            <Label style={styles.label}>전화번호</Label>
            <Item rounded>
              <Input
                keyboardType={"number-pad"}
                value={phone}
                onChangeText={onChangePhone}
              />
              <CloseButtonCoord>
                {phone && (
                  <AntDesign
                    name="closecircle"
                    color="grey"
                    size={16}
                    onPress={onResetPhone}
                  />
                )}
              </CloseButtonCoord>
            </Item>
          </View>
          <View style={styles.inputLayout}>
            <Label style={styles.label}>소속 부서</Label>
            {Platform.OS === "ios" ? (
              <Picker
                mode="dropdown"
                placeholder="소속 부서를 선택해주세요"
                iosIcon={<AntDesign name="down" />}
                placeholderStyle={{ color: "#2874F0" }}
                note={false}
                selectedValue={selectedDept}
                onValueChange={onDeptValueChange}
              >
                <Picker.Item label="CEO" value="A" />
                <Picker.Item label="경영" value="B" />
                <Picker.Item label="영업" value="C" />
                <Picker.Item label="개발" value="D" />
                <Picker.Item label="디자인" value="E" />
                <Picker.Item label="마케팅" value="F" />
              </Picker>
            ) : (
              <DropDownPicker
                placeholder="소속 부서를 선택해주세요"
                items={[
                  { label: "CEO", value: "A" },
                  { label: "경엉", value: "B" },
                  { label: "영업", value: "C" },
                  { label: "개발", value: "D" },
                  { label: "디자인", value: "E" },
                  { label: "마케팅", value: "F" },
                ]}
                defaultValue={selectedDept}
                DropDownPicker={onDeptValueChange}
                showArrow={false}
                itemStyle={{
                  justifyContent: "flex-start",
                }}
              />
            )}
          </View>
          <View style={styles.inputLayout}>
            <Label style={styles.label}>입사일</Label>
            <DatePicker date={selectedDate} setDate={setSelectedDate} />
          </View>
          <View style={styles.buttonAreaLayout}>
            <BasicButton type="submit" onPress={onSubmit}>
              <Text style={styles.buttonText}>입력</Text>
            </BasicButton>
          </View>
        </Form>
      </Content>
    </Container>
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
  label: {
    marginTop: 26,
    marginBottom: 10,
  },
});
export default ChangeUserData;
