import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { LocaleConfig } from "react-native-calendars";
import { Calendar } from "react-native-calendars";
import AntDesign from "react-native-vector-icons/AntDesign";
LocaleConfig.locales["ko"] = {
  monthNames: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  monthNamesShort: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
  today: "오늘",
};
LocaleConfig.defaultLocale = "ko";
const WorkCalendar = () => {
  const applyType = [
    { key: "출장", color: "orange" },
    { key: "병가", color: "blue" },
    { key: "연차", color: "pink" },
    { key: "반차", color: "skyblue" },
    { key: "예비군", color: "yellowgreen" },
    { key: "기타", color: "purple" },
  ];

  const [selected, setSelected] = useState("");

  const [markedDate, setMarkedDate] = useState({});

  const onDayPress = (day) => {
    console.log("selected day", day);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Calendar
          style={{
            width: 400,
            height: 320,
          }}
          theme={{
            "stylesheet.calendar.header": {
              header: {
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 6,
                alignItems: "center",
                marginBottom: 26,
              },
            },
            "stylesheet.calendar.main": {
              monthView: {
                backgroundColor: "#fff",
                paddingBottom: 20,
              },
            },
          }}
          renderArrow={(direction) =>
            direction === "left" ? (
              <AntDesign name="left" size={20} color="#50cebb" />
            ) : (
              <AntDesign name="right" size={20} color="#50cebb" />
            )
          }
          monthFormat={"yyyy년 MM월"}
          enableSwipeMonths={true}
          horizontal={true}
          pagingEnabled={true}
          calendarWidth={"100%"}
          // Collection of dates that have to be colorgreened in a special way. Default = {}

          onDayPress={onDayPress}
          markedDates={{
            "2021-02-14": {
              startingDay: true,
              color: applyType[0].color,
              textColor: "white",
              endingDay: true,
            },
            "2021-02-16": {
              startingDay: true,
              color: applyType[2].color,
              textColor: "white",
              endingDay: true,
            },
            "2021-02-21": {
              startingDay: true,
              color: applyType[4].color,
              textColor: "white",
            },
            "2021-02-22": {
              color: applyType[4].color,
              textColor: "white",
            },
            "2021-02-23": {
              color: applyType[4].color,
              textColor: "white",
              endingDay: true,
            },
          }}
          // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
          markingType={"period"}
        />
      </View>
      <View style={styles.applyColorInfo}>
        {applyType.map((t, i) => {
          return (
            <View
              key={t + i}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: 15,
                  height: 15,
                  borderRadius: 100 / 2,
                  backgroundColor: t.color,
                }}
              />
              <Text style={styles.infoText}>{t.key}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#fff",
  },
  applyForm: {
    zIndex: 100,
    position: "absolute",
    left: 0,
    top: 0,
  },
  applyColorInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 30 : 50,
  },
  infoText: {
    margin: 5,
    textAlign: "center",
  },
});

export default WorkCalendar;
