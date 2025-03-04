import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import MovieScreen from "../screens/MovieScreen";
import PersonScreen from "../screens/PersonScreen";
import SearchScreen from "../screens/SearchScreen";

import { MovieContext } from "../context/context";
import FavoriteScreen from "../screens/FavoriteScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  const [movies, setMovies] = useState([]);
  return (
    <NavigationContainer>

      <MovieContext.Provider value={{movies}}>

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Movie"
          options={{ headerShown: false }}
          component={MovieScreen}
        />
        <Stack.Screen
          name="Person"
          options={{ headerShown: false }}
          component={PersonScreen}
        />
        <Stack.Screen
          name="Search"
          options={{ headerShown: false }}
          component={SearchScreen}
        />
        <Stack.Screen
          name="favorites"
          options={{ headerShown: false }}
          component={FavoriteScreen}
        />
      </Stack.Navigator>

      </MovieContext.Provider>

    </NavigationContainer>
  );
};

export default AppNavigation;
