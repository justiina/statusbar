import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="light" backgroundColor="seagreen" hidden={false} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddinTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
});
