import React from "react";
import { View, StyleSheet, Text, TextInput, Image } from "react-native";
import BottomBar from "../Components/BottomBar";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Forum() {
  return (
    <View style={styles.Main}>
      <View style={styles.Forum}>
        <View style={styles.Search}>
          <View style={styles.SearchBar}>
            <FontAwesome name="search" size={24} color="black" />
            <TextInput
              style={{ marginLeft: "3%" }}
              placeholder="Forumda Arayın..."
            />
          </View>
        </View>
        <View style={styles.Questions}>
          <View style={styles.Question}>
            <View style={styles.QuestionTop}>
              <Image
                style={styles.Image}
                source={require("../Images/2.jpeg")}
              />
            </View>
            <Text style={styles.Text}>
              Arkadaşlar bu soruya bakabilir misiniz?
            </Text>
            <View style={styles.QuestionBottom}>
              <AntDesign name="heart" size={28} color="tomato" />
              <Text style={styles.QuestionBottomText}>2</Text>
              <FontAwesome name="comment-o" size={28} color="black" />
              <Text style={styles.QuestionBottomText}>3</Text>
            </View>
          </View>
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
  Bottom: {
    flex: 1,
    backgroundColor: "yellow",
  },
  Forum: {
    flex: 9,
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
  },
  Search: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: "2%",
    paddingTop: "5%",
  },
  Questions: {
    flex: 9,
    backgroundColor: "#efefef",
    padding: "5%",
  },
  Question: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 5,
    padding: "2%",
  },
  SearchBar: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    paddingLeft: "5%",
  },
  QuestionTop: {
    flex: 10,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  QuestionBottom: {
    flex: 0.8,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  QuestionBottomText: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 8,
    color: "gray",
  },
  Image: {
    width: 300,
    height: 440,
    borderRadius: 20,
  },
  Text: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "center",
  },
});
