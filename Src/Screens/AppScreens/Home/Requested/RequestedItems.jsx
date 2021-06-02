import React from "react";

//Dependencies
import { StyleSheet, Text, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

const RequestedItems = ({ item }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.text }]}>
      <View
        style={{
          // flex: 1,
          paddingVertical: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.Title, { color: colors.background }]}>
          {item.title}
        </Text>

        <Text style={[styles.Teacher, { color: colors.background }]}>
          {item.teacher} - {item.grade}
        </Text>
        <Text style={[styles.DueDate, { color: colors.background }]}>
          Due: {item.Due}
        </Text>
      </View>
    </View>
  );
};

export default RequestedItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 5,
    //flexDirection: "row",
  },
  Title: {
    fontWeight: "400",
    textAlign: "center",
  },

  Teacher: {
    fontWeight: "200",
  },
  DueDate: {
    fontWeight: "300",
  },
});
