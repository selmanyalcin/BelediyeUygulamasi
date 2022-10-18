import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import BottomBar from "../Components/BottomBar";
import { LinearGradient } from "expo-linear-gradient";

export default function Group() {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <View style={styles.Social}>
        <View style={styles.TopBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Arkadaşlarım")}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#20BF55", "#01BAEF"]}
              style={styles.TopNav}
            >
              <Text style={styles.text}>Arkadaşlarım</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Gruplarım")}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#20BF55", "#01BAEF"]}
              style={styles.TopNav}
            >
              <Text style={styles.text}>Gruplarım</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.Friends}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Grubum")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://i.ytimg.com/vi/V_FycKbBjHM/hqdefault.jpg",
              }}
            />
            <Text style={styles.Text1}>12/A Sınıf Grubu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Grubum")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://www.dilbilgisi.net/wp-content/uploads/2019/01/12-Sinif.jpg",
              }}
            />
            <Text style={styles.Text1}>12.Sınıflar Genel Grup</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Grubum")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
            <Text style={styles.Text1}>YKS Hazırlık</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Grubum")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
            <Text style={styles.Text1}>TYT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Grubum")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://aytsinavim.net/wp-content/uploads/2021/02/AYT.jpg",
              }}
            />
            <Text style={styles.Text1}>AYT</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Grubum")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTywU6ImKMhwBiTmkPOZxyuUY5FfFmbtQhqEQ&usqp=CAU",
              }}
            />
            <Text style={styles.Text1}>Geometri Grubu</Text>
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
    padding: "5%",
    borderRadius: 20,
    margin: 7,
  },
  Image: {
    width: 60,
    height: 60,
    borderRadius: 40,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
