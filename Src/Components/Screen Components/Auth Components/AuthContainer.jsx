import React from "react";

//Dependencies
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";

const AuthContainer = ({
  children,
  footer,
  image,
  text,
  description1,
  description2,
}) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <View>
        <View style={styles.image}>
          <Image
            source={require("../../../../assets/undraw_Online_article_re_daq5.png")}
            style={{ resizeMode: "contain", height: 44, width: 44 }}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={[styles.Text, { color: colors.text }]}>{text}</Text>
        </View>
        <View style={styles.DescriptionContainer}>
          <Text style={[styles.Description, { color: colors.text }]}>
            {description1}
            {"\n"}
            {description2}
          </Text>
        </View>
      </View>
      <View style={styles.Children}>{children}</View>
      <View style={styles.Footer}>{footer}</View>
    </SafeAreaView>
  );
};

export default AuthContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    //height: 44,
    //width: 44,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 92,
  },
  TextContainer: {
    marginTop: 35,
  },
  Text: {
    width: 343,
    height: 41,
    fontWeight: "700",
    fontSize: 34,
    lineHeight: 41,
    textAlign: "center",
    marginHorizontal: 16,
  },
  DescriptionContainer: {
    marginTop: 16,
    marginBottom: 40,
  },
  Description: {
    width: 343,
    height: 44,
    marginHorizontal: 16,
    fontWeight: "400",
    fontSize: 17,
    lineHeight: 22,
    textAlign: "center",
  },
  Children: {
    width: "100%",
    justifyContent: "center",
    //alignItems: "center",
  },
  Footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});
