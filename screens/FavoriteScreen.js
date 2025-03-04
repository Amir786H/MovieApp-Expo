import {
    View,
    Text,
    Dimensions,
    Platform,
  } from "react-native";
  import React, { useState, useCallback } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useNavigation } from "@react-navigation/native";
  
  var { height, width } = Dimensions.get("window");
  const ios = Platform.OS == "ios";
  const verticalMargin = ios ? "" : "my-3";
  
  export default function FavoriteScreen() {
    const navigation = useNavigation();
  
    return (
      <SafeAreaView className="bg-neutral-800 flex-1">
        <View className="flex-row items-center justify-between mx-4 mt-4">
            <Text className="text-2xl text-neutral-100">Favorite Movies</Text>
        </View>
      </SafeAreaView>
    );
  }
  