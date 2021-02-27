import React from "react";
import { StyleSheet, Image, Text, SafeAreaView } from "react-native";

const LogoTitle = () => {
  return (
    <SafeAreaView style={styles.logoTitle}>
      <Image
        source={require("../assets/Logo.png")}
        resizeMode="contain"
        style={{ height: 70 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logoTitle: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#fff",
  },
});

export default LogoTitle;
