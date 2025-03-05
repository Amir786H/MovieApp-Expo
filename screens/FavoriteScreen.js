import {
  Platform,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useCallback, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { MovieContext } from "../context/context";
import MovieList from "../components/movieList";

const ios = Platform.OS == "ios";

export default function FavoriteScreen() {
  const navigation = useNavigation();
  const { movies } = useContext(MovieContext);
  
  return (
    <SafeAreaView className="bg-neutral-800 flex-1">

      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <MovieList title="Favorite Movie's" data={movies} />
      </ScrollView>
    </SafeAreaView>
  );
}
