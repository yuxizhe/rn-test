// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function List() {
  return (
    <View>
      {Array(10).fill(1).map((item, index) => 
        <View style={styles.listDiv} key={index}>
          <Text>{index}</Text>
        </View>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  listDiv: {
    // height: 10,
    margin: 5,
    padding: 2,
    borderWidth: 1,
    borderRadius: 2,
  },
});
