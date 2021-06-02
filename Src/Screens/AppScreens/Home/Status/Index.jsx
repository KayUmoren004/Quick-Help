import React from "react";

//Dependencies
import { StyleSheet, Text, View, FlatList } from "react-native";
import data from "../../../../Components/Temp/Status";
import StatusItem from "./StatusItems";
import { useTheme } from "@react-navigation/native";

const Status = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.Header, { color: colors.text }]}>Status</Text>
      <View style={{ width: "100%" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <StatusItem item={item} />}
          bounces={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
