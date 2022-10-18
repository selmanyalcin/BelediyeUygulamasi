import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import BottomBar from "../Components/BottomBar";
import { LinearGradient } from "expo-linear-gradient";

export default function MyGroup() {
  const navigation = useNavigation();
  return (
    <View style={styles.Main}>
      <View style={styles.Social}>
        <View style={styles.TopBar}>
          <TouchableOpacity onPress={() => navigation.navigate("Grubum")}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#20BF55", "#01BAEF"]}
              style={styles.TopNav}
            >
              <Text style={styles.text}>Çözülen Soru Sayıları</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Deneme Netleri")}
          >
            <LinearGradient
              // Button Linear Gradient
              colors={["#20BF55", "#01BAEF"]}
              style={styles.TopNav}
            >
              <Text style={styles.text}>Deneme Sıralamaları</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Mesajlarım")}>
            <LinearGradient
              // Button Linear Gradient
              colors={["#20BF55", "#01BAEF"]}
              style={styles.TopNav}
            >
              <Text style={styles.text}>Mesajlar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.Friends}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Arkadaşım")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
            <Text style={styles.Text1}> İlker Öztürk </Text>
            <Text style={styles.Text2}> 263 Soru</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Arkadaşım")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://pbs.twimg.com/media/FSXn9kjXEAscS0x?format=jpg&name=360x360",
              }}
            />
            <Text style={styles.Text1}> Ersel Buran </Text>
            <Text style={styles.Text2}>240 Soru</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Arkadaşım")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/11/15/asset/82ea240a9e12/sub-buzz-3085-1652283787-10.jpg?downsize=900:*&output-format=auto&output-quality=auto",
              }}
            />
            <Text style={styles.Text1}>Tuna Kuzgun</Text>
            <Text style={styles.Text2}>238 Soru</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Arkadaşım")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://play-lh.googleusercontent.com/OnKo13qD4QwAGYYrq-WilbQ3B41sU13hdLtbmcoN3uwTBwF_a0QAAXcRUY70d0zn2g",
              }}
            />
            <Text style={styles.Text1}> Ben </Text>
            <Text style={[styles.Text2, { marginLeft: "38%" }]}>215 Soru</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Arkadaşım")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://img.buzzfeed.com/buzzfeed-static/static/2022-05/11/14/asset/82ea240a9e12/sub-buzz-2936-1652280422-21.jpg?downsize=900:*&output-format=auto&output-quality=auto",
              }}
            />
            <Text style={styles.Text1}>Sevgi Yılmaz</Text>
            <Text style={styles.Text2}>198 Soru</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Arkadaşım")}
            style={styles.Friend}
          >
            <Image
              style={styles.Image}
              source={{
                uri: "https://media.marketrealist.com/brand-img/Ik1D_rqGf/0x0/newprofile-pic-1-1652281674003.jpg",
              }}
            />
            <Text style={styles.Text1}>Sena Demirci</Text>
            <Text style={styles.Text2}>197 Soru</Text>
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
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});
