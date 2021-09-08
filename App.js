import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import Homescreen from "./Screens/Homescreen";


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Homescreen />
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
        />
      </View>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})