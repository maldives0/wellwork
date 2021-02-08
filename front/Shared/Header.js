import React from 'react';
import {StyleSheet, Image, Text, SafeAreaView} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Image
        source={require('../assets/Logo.png')}
        resizeMode="contain"
        style={{height: 60}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#fff',
  },
});

export default Header;
