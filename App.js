// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import List from './src/List';
import TopBanner from './src/TopBanner';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Button
        style={styles['button-test']}
        onPress={() => alert(1)}
        title="Learn More"
        color="green"
      />
      <TopBanner />
      <List />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  // fontClass: {
  //   fontFamily: "Cochin"
  // }
});
