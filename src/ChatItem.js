import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Divider from "./Divider";

const ChatItem = ({ chat }) => {
  return (
    <View>
      <View style={[styles.item]} testID="chat-item">
        <View style={[styles.imageContainer]}>
          <Image
            testID="image"
            style={[styles.image]}
            source={{ uri: chat.picture }}
          />
          <View style={[styles.shadowTL]} />
          <View style={[styles.shadowBR]} />
        </View>
        <View style={[styles.information]}>
          <Text testID="name" style={[styles.name]}>
            {chat.name}
          </Text>
          <Text
            testID="summary"
            style={[styles.summary]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {chat.summary}
          </Text>
        </View>
        <View>
          <Text style={[styles.time]} testID="time">
            {chat.time}
          </Text>
        </View>
      </View>
      <Divider />
    </View>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  shadowTL: {
    // borderWidth: 2,
    // borderColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 64,
    width: "100%",
    height: "100%",
  },
  shadowBR: {
    borderWidth: 2,
    borderColor: "#b4d0fc",
    shadowColor: "#b4d0fc",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 64,
    width: "100%",
    height: "100%",
  },
  information: {
    flex: 1,
    flexDirection: "column",
    marginRight: 20,
  },
  name: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  summary: {
    fontSize: 12,
  },
  imageContainer: {
    marginRight: 16,
  },
  image: {
    width: 68,
    height: 68,
    borderRadius: 68,
    borderWidth: 4,
    borderColor: "#dde8fa",
  },
  time: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
