import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Dersler")}
      >
        <FontAwesome5 name="pen" size={30} color="black" />
        <Text style={styles.Text}>Dersler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("İstatistikler")}
      >
        <Ionicons name="stats-chart" size={30} color="black" />
        <Text style={styles.Text}>İstatistikler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Forum")}
      >
        <MaterialIcons name="forum" size={30} color="black" />
        <Text style={styles.Text}>Forum</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Arkadaşlarım")}
      >
        <FontAwesome5 name="user-friends" size={30} color="black" />
        <Text style={styles.Text}>Arkadaşlar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Profilim")}
      >
        <FontAwesome name="user" size={30} color="black" />
        <Text style={styles.Text}>Profilim</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Top: {
    flex: 9,
    backgroundColor: "white",
  },
  Bottom: {
    flex: 1.5,
    backgroundColor: "white",
  },
  Button: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  Text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
