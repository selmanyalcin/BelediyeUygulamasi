import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomBar from "../Components/BottomBar";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLine,
} from "victory-native";

export default function Stats() {
  return (
    <View style={styles.Main}>
      <View style={styles.Top}></View>
      <View style={styles.Bottom}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Top: {
    flex: 9,
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
  },
  Main: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "red",
  },
  Bottom: {
    flex: 1,
    backgroundColor: "yellow",
  },
});
