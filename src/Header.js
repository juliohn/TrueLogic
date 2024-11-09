import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors, globalStyles } from "./styles";

export const Header = ({ handleFilter }) => {
  return (
    <View style={[styles.header]}>
      <Text style={[styles.headerText]}>Chats</Text>
      <View>
        <TextInput
          testID="search"
          style={[styles.input]}
          placeholder="Search"
          onChangeText={handleFilter}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginVertical: 16,
    marginHorizontal: 24,
    flexDirection: "column",
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    marginLeft: 8,
    color: "#3b3b3b",
  },
  input: {
    height: 46,
    width: "100%",
    paddingHorizontal: 24,
    backgroundColor: "#f1f7fc",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#b4d0fc",
  },
  shadowTL: {
    shadowColor: "#2c2c2c",
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    position: "absolute",
    left: 0,
    top: 0,
    borderRadius: 8,
    width: "100%",
    height: "100%",
  },
  shadowBR: {
    shadowColor: "#0a0a0a",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 8,
    width: "100%",
    height: "100%",
  },
});
