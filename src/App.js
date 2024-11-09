import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Chats from "./Chats";
import Header from "./Header";
import CHATS from "./../chats.json";

const App = () => {
  const [currentChat, setCurrentChat] = useState(CHATS);

  function handleFilter(filter) {
    if (filter.left === 0) {
      setCurrentChat(CHATS);
    }

    const filteredChat = CHATS.filter(function (item) {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });

    setCurrentChat(filteredChat);
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header handleFilter={handleFilter} />
      <View style={styles.frame}>
        <Chats chats={currentChat} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4ebf5",
  },
  frame: {
    maxWidth: 500,
    flex: 1,
  },
});
