import * as React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Pages/Home";
import Stats from "./Pages/Stats";
import Forum from "./Pages/Forum";
import Social from "./Pages/Social";
import ProfileSettings from "./Pages/ProfileSettings";
import Settings from "./Pages/Settings";
import Friend from "./Pages/Friend";
import Group from "./Pages/Group";
import MyGroup from "./Pages/MyGroup";
import Deneme from "./Pages/Deneme";
import Messages from "./Pages/Messages";

function HomeScreen({ navigation }) {
  return <Home />;
}

function StatsScreen({ navigation }) {
  return <Stats />;
}

function ForumScreen({ navigation }) {
  return <Forum />;
}

function SocialScreen({ navigation }) {
  return <Social />;
}
function ProfileSetScreen({ navigation }) {
  return <ProfileSettings />;
}

function SettingsScreen({ navigation }) {
  return <Settings />;
}

function FriendScreen({ navigation }) {
  return <Friend />;
}

function GroupScreen({ navigation }) {
  return <Group />;
}

function MyGroupScreen({ navigation }) {
  return <MyGroup />;
}

function DenemeScreen({ navigation }) {
  return <Deneme />;
}

function MessagesScreen({ navigation }) {
  return <Messages />;
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dersler" component={HomeScreen} />
      <Stack.Screen name="İstatistikler" component={StatsScreen} />
      <Stack.Screen name="Forum" component={ForumScreen} />
      <Stack.Screen name="Arkadaşlarım" component={SocialScreen} />
      <Stack.Screen name="Profilim" component={ProfileSetScreen} />
      <Stack.Screen name="Ayarlar" component={SettingsScreen} />
      <Stack.Screen name="Arkadaşım" component={FriendScreen} />
      <Stack.Screen name="Gruplarım" component={GroupScreen} />
      <Stack.Screen name="Grubum" component={MyGroupScreen} />
      <Stack.Screen name="Deneme Netleri" component={DenemeScreen} />
      <Stack.Screen name="Mesajlarım" component={MessagesScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
