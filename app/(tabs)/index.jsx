import { View, Text, StyleSheet, ImageBackground } from "react-native";

import React from "react";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        src={
          "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        resizeMode="cover"
        style={styles.image}
      >
        
        <Text style={styles.text}>
          <Text style={styles.textRun}>Run</Text>
          <Text style={styles.textPrepper}>Prepper</Text>
        </Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: 10,
  },
  textRun: {
    color: "yellow",
  },
  textPrepper: {
    color: "white",
    fontSize: 50,
  },
});
