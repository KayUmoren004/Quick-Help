import React from "react";

//Dependencies
import { StyleSheet, Text, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";

const RecentItems = ({ item }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.text }]}>
      <Image
        source={{ uri: item.image }}
        style={[
          styles.Document,
          {
            resizeMode: "contain",
          },
        ]}
      />
      <View
        style={{
          flex: 1,
          paddingVertical: 5,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Text style={[styles.Title, { color: colors.background }]}>
          {item.title}
        </Text>
        <View style={{ marginVertical: 10 }} />
        <Text style={[styles.Teacher, { color: colors.background }]}>
          {item.teacher} - {item.grade}
        </Text>
      </View>
    </View>
  );
};

export default RecentItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 25,
    width: 170,
  },
  Title: {
    fontWeight: "400",
    textAlign: "center",
  },
  Document: {
    height: 150,
    width: 150,
    borderRadius: 25,
  },
  Teacher: {
    fontWeight: "200",
  },
});
