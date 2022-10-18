import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button,
} from "react-native";
import BottomBar from "../Components/BottomBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSettings() {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <View style={styles.HomeArea}>
        <View style={styles.Profile}>
          <View style={styles.ProfilePhotoSection}>
            <Image
              style={styles.PP}
              source={{
                uri: "https://play-lh.googleusercontent.com/OnKo13qD4QwAGYYrq-WilbQ3B41sU13hdLtbmcoN3uwTBwF_a0QAAXcRUY70d0zn2g",
              }}
            />
            <Text style={{ fontSize: 23, fontWeight: "bold" }}>
              Hande Yıkılmaz
            </Text>
          </View>
          <View style={styles.ProfileInfo}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "5%",
                backgroundColor: "white",
              }}
            >
              <Text style={styles.InfoText}>Okul: Tofaş Fen Lisesi</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "5%",
                backgroundColor: "white",
              }}
            >
              <Text style={styles.InfoText}>Telefon:0 551 126 62 96</Text>
            </View>
            <Text style={styles.InfoText}>Puan: 1654</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                backgroundColor: "white",
                flex: 0.8,
              }}
            >
              <Button title="Arkadaşını Davet Et" color={"#20BF55"} />
              <Button title="Çıkış Yap" color={"#20BF55"} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.BottomBar}>
        <BottomBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Logo: {
    flex: 1.8,
    backgroundColor: "#efefef",
    paddingLeft: "5%",
    justifyContent: "center",
  },
  Main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  HomeArea: {
    flex: 9,
    backgroundColor: "red",
  },
  Search: {
    flex: 1,
    backgroundColor: "#efefef",
    padding: "3%",
  },
  Profile: {
    flex: 8,
    backgroundColor: "#efefef",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  BottomBar: {
    flex: 1,
    backgroundColor: "yellow",
  },
  CategoryArea: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "blue",
    padding: "5%",
  },
  Category: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
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
  ProfilePhotoSection: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingVertical: "5%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 5,
  },
  ProfileInfo: {
    flex: 4,
    display: "flex",
    backgroundColor: "white",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 5,
    paddingHorizontal: "5%",
  },
  PP: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: "2%",
  },
  InfoText: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: "5%",
    marginTop: "5%",
  },
  TextInput: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: "2.5%",
    marginVertical: "2.5%",
    borderRadius: 20,
    borderColor: "gray",
  },
});
