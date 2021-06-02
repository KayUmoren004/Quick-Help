import React from "react";

//Dependencies
import { StyleSheet, Text, View, FlatList } from "react-native";
import data from "../../../../Components/Temp/Recent";
import RecentItems from "./RecentItems";
import { useTheme } from "@react-navigation/native";

const Recent = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.Header, { color: colors.text }]}>Recent</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <RecentItems item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Recent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
