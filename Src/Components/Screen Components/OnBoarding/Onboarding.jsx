import React, { useEffect, useRef, useState } from "react";

//Dependencies
import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import Slides from "../../Temp/Slides";
import OnboardingItem from "./OnboardingItem";
import Paginator from "../../../Components/Screen Components/Paginator/Paginator";
import NextButton from "../../../Components/Screen Components/Next Button/NextButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Onboarding = ({ setSeen }) => {
  //State
  const [currentIndex, setCurrentIndex] = useState(0);
  //Animated Scroll
  const scrollX = useRef(new Animated.Value(0)).current;
  //When User Scrolls
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  //FlatList ref
  const slidesRef = useRef(null);

  //At lest 50% before view
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  //Button onClick
  const scrollTo = async () => {
    if (currentIndex < Slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("@viewedOnboarding", "true");
        console.log("end");
        setSeen(true);
      } catch (error) {
        console.log("Error @setItem: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={Slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>

      <Paginator data={Slides} scrollX={scrollX} />
      <NextButton
        scrollTo={scrollTo}
        percentage={(currentIndex + 1) * (100 / Slides.length)}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
