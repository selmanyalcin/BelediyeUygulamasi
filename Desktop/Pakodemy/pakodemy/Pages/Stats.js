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
  const data = [
    { quarter: 1, earnings: 78 },
    { quarter: 2, earnings: 133 },
    { quarter: 3, earnings: 165 },
    { quarter: 4, earnings: 56 },
    { quarter: 5, earnings: 75 },
    { quarter: 6, earnings: 105 },
    { quarter: 7, earnings: 86 },
  ];
  return (
    <View style={styles.Main}>
      <View style={styles.Top}>
        <Text style={styles.Text}>Soru Sayısı</Text>
        <View style={styles.Chart}>
          <VictoryChart>
            <VictoryLine
              style={{
                data: { stroke: "#20BF55" },
                parent: { border: "1px solid #20BF55" },
              }}
              data={[
                { x: 1, y: 134 },
                { x: 2, y: 103 },
                { x: 3, y: 94 },
                { x: 4, y: 165 },
                { x: 5, y: 82 },
              ]}
            />
          </VictoryChart>
        </View>

        <Text style={styles.Text}>Deneme Netleri</Text>
        <View style={[styles.Chart, { marginBottom: 10 }]}>
          <VictoryChart>
            <VictoryLine
              style={{
                data: { stroke: "#20BF55" },
                parent: { border: "1px solid #20BF55" },
              }}
              data={[
                { x: 1, y: 54 },
                { x: 2, y: 65 },
                { x: 3, y: 59 },
                { x: 4, y: 74 },
                { x: 5, y: 80 },
              ]}
            />
          </VictoryChart>
        </View>
      </View>
      <View style={styles.Bottom}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Top: {
    flex: 9,
    backgroundColor: "#efefef",
    display: "flex",
    flexDirection: "column",
    paddingHorizontal: "5%",
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
  Chart: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
    borderRadius: 20,
  },
  Text: {
    fontSize: 22,
    fontWeight: "bold",
    margin: 5,
  },
});
