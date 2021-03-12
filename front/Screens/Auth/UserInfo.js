import React, { useCallback, useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import axios from "axios";
import useSWR, { mutate } from "swr";

import {
  Container,
  Header,
  Content,
  Picker,
  Form,
  Item,
  Input,
  Label,
} from "native-base";
import useInput from "@/hooks/useInput";
import DatePicker from "@/Components/DatePicker";
import { BasicButton, CloseButtonCoord } from "@/Components/BasicStyles";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

function UserInfo({ route, navigation }) {
  const [phone, onChangePhone, onResetPhone, setPhone] = useInput("");
  const [selectedDept, setSelectedDept] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDeptValueChange = useCallback((e) => {
    setSelectedDept(e);
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
                containerStyle={{ height: 40 }}
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
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 50,
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

export default UserInfo;
