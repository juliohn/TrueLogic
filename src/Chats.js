import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ChatItem from "./ChatItem";
import { color } from "react-native-reanimated";

const Chats = ({ chats }) => {
  return (
    <FlatList
      data={chats}
      initialNumToRender={100}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatItem key={item.id.toString()} chat={item} />
      )}
      ListEmptyComponent={
        <View style={styles.emptyCHAT}>
          <Text style={styles.emptyText}>
            No chat found, try another filter
          </Text>
        </View>
      }
    />
  );
};

export default Chats;

const styles = StyleSheet.create({
  emptyCHAT: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
