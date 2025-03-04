import { View, Text, Dimensions } from "react-native";
import React from "react";
import * as Progress from 'react-native-progress';
import { styles, theme } from "../theme";

var { height, width } = Dimensions.get("window");
// const ios = Platform.OS == "ios";
// const verticalMargin = ios ? "" : "my-3";

export default function Loading() {
  return (
    <View
      style={{ height, width }}
      className="absolute flex-row justify-center items-center"
    >
       <Progress.CircleSnail thickness={12} size={160} color={theme.background}  />
    </View>
  );
}
