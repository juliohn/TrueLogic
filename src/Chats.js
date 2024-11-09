import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatItem from "./ChatItem";

const Chats = ({ chats }) => {
  return (
    <FlatList
      data={chats}
      initialNumToRender={100}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatItem key={item.id.toString()} chat={item} />
      )}
    />
  );
};

export default Chats;

const styles = StyleSheet.create({});
