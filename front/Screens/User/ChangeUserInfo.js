import React, { useState, useCallback } from "react";

import { StyleSheet, SafeAreaView, View, Text, Platform } from "react-native";

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
const ChangeUserInfo = ({ navigation, route }) => {
  const [phone, onChangePhone, onResetPhone, setPhone] = useInput("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [items, setItems] = useState([
    { label: "CEO", value: "A" },
    { label: "경영", value: "B" },
    { label: "영업", value: "C" },
    { label: "개발", value: "D" },
    { label: "디자인", value: "E" },
    { label: "마케팅", value: "F" },
  ]);
  let controller;
  const onDeptValueChange = (item) => {
    setSelectedDept(item.value);
  };
  const onSubmit = async () => {
    try {
      console.log(phone, selectedDept, selectedDate.toString().substr(4, 12));
      setPhone("");
      setSelectedDept(null);
      setSelectedDate(new Date());
      navigation.navigate("프로필");
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
                style={{ marginLeft: 15, height: 40 }}
                keyboardType={"number-pad"}
                value={phone}
                onChangeText={onChangePhone}
              />
              <CloseButtonCoord phone>
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
          <View
            style={{
              position: "relative",
              zIndex: 10,
              padding: 16,
            }}
          >
            <Label style={styles.label}>소속 부서</Label>
            <DropDownPicker
              dropDownMaxHeight={200}
              placeholder="소속 부서를 선택해주세요"
              items={items}
              defaultValue={selectedDept}
              onChangeItem={(item) => setSelectedDept(item.value)}
              activeLabelStyle={{ color: "yellowgreen" }}
              containerStyle={{ height: 40 }}
              labelStyle={{ fontSize: 14, textAlign: "left", color: "#000" }}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              style={{
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              dropDownStyle={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              }}
              childrenContainerStyle={{
                paddingLeft: 30,
              }}
            />
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
    alignItems: "flex-start",
  },
  formLayout: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },

  inputLayout: {
    padding: 16,
  },

  buttonAreaLayout: {
    fontSize: 20,
    flexDirection: "row-reverse",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
  label: {
    marginTop: 16,
    marginBottom: 10,
  },
});
export default ChangeUserInfo;
