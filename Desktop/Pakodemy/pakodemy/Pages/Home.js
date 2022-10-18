import React from "react";
import { View, StyleSheet, Text } from "react-native";
import BottomBar from "../Components/BottomBar";
import { LinearGradient } from "expo-linear-gradient";
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome5,
  Entypo,
  Feather,
} from "@expo/vector-icons";

export default function Home() {
  return (
    <View style={styles.Main}>
      <View style={styles.Top}>
        <View style={styles.TopArea}>
          <LinearGradient
            // Button Linear Gradient
            colors={["#20BF55", "#01BAEF"]}
            style={styles.TopDiv}
          >
            <Text style={[styles.text, { color: "white" }]}>Konu Anlatımı</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["#20BF55", "#01BAEF"]}
            style={styles.TopDiv}
          >
            <Text style={[styles.text, { color: "white" }]}>
              Online Denemeler
            </Text>
          </LinearGradient>
        </View>
        <View style={styles.Subjects}>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <AntDesign name="book" size={30} color="black" />
            <Text style={styles.text}>Türkçe</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <AntDesign name="calculator" size={30} color="black" />
            <Text style={styles.text}>Matematik</Text>
          </LinearGradient>

          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <MaterialCommunityIcons
              name="math-compass"
              size={30}
              color="black"
            />
            <Text style={styles.text}>Geometri</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <SimpleLineIcons name="chemistry" size={30} color="black" />
            <Text style={styles.text}>Kimya</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <MaterialIcons name="biotech" size={30} color="black" />
            <Text style={styles.text}>Biyoloji</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <FontAwesome5 name="atom" size={30} color="black" />
            <Text style={styles.text}>Fizik</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <MaterialIcons name="history-edu" size={34} color="black" />
            <Text style={styles.text}>Tarih</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <Entypo name="globe" size={30} color="black" />
            <Text style={styles.text}>Coğrafya</Text>
          </LinearGradient>
          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <FontAwesome5 name="yin-yang" size={30} color="black" />
            <Text style={styles.text}>Felsefe</Text>
          </LinearGradient>

          <LinearGradient
            // Button Linear Gradient
            colors={["white", "white"]}
            style={styles.Subject}
          >
            <Feather name="moon" size={30} color="black" />
            <Text style={styles.text}>Din Kültürü ve Ahlak Bilgisi</Text>
          </LinearGradient>
        </View>
      </View>
      <View style={styles.Bottom}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  Top: {
    flex: 11,
    backgroundColor: "#efefef",
    display: "flex",
    flexDirection: "column",
  },
  Bottom: {
    flex: 1,
    backgroundColor: "white",
  },
  TopArea: {
    flex: 1,
    backgroundColor: "#efefef",
    display: "flex",
    flexDirection: "row",
    padding: "2.5%",
  },
  TopDiv: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  Subjects: {
    flex: 9,
    backgroundColor: "#efefef",
    padding: "2.5%",
  },
  Subject: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "5%",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
  },
});
