import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import BottomBar from "../Components/BottomBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Messages() {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <View style={styles.Social}>
        <View style={styles.Social}></View>
        <View style={styles.TaskSection}>
          <TextInput style={styles.input} placeholder="Bir Mesaj Gönderin..." />
          <TouchableOpacity style={styles.Button}>
            <View>
              <MaterialCommunityIcons name="send" size={31} color="white" />
            </View>
          </TouchableOpacity>
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
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "red",
  },
  Social: {
    flex: 9,
    backgroundColor: "#efefef",
    display: "flex",
    flexDirection: "column",
  },
  Bottom: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  TopBar: {
    flex: 1,
    backgroundColor: "#efefef",
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  Friends: {
    display: "flex",
    flexDirection: "column",
    padding: "5%",
    flex: 9,
  },
  Friend: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 10,
  },
  TopNav: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2%",
    borderRadius: 20,
    margin: 7,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
  Text1: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: "bold",
  },
  Text2: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "20%",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
  TaskSection: {
    backgroundColor: "#efefef",
    display: "flex",
    flexDirection: "row",
    flex: 1.5,
    alignItems: "center",
    alignSelf: "flex-end",
  },
  TaskScroll: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#efefef",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  input: {
    height: 60,
    margin: 12,
    padding: 10,
    flex: 7,
    borderRadius: 20,
    backgroundColor: "white",
    fontSize: 18,
  },
  Button: {
    flex: 1,
    height: 60,
    margin: 12,
    padding: 10,
    borderRadius: 60,
    backgroundColor: "#20BF55",
    alignItems: "center",
    justifyContent: "center",
  },
});
