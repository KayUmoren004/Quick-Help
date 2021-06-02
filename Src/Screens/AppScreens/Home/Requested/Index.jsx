import React from "react";

//Dependencies
import { StyleSheet, Text, View, FlatList } from "react-native";
import data from "../../../../Components/Temp/Requests";
import RequestedItems from "./RequestedItems";
import { useTheme } from "@react-navigation/native";

const Requests = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.Header, { color: colors.text }]}>Requests</Text>

      <View style={{ width: "100%" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <RequestedItems item={item} />}
          bounces={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
