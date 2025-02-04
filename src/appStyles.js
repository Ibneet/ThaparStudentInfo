import * as Expo from "expo";
import { StyleSheet, Platform } from "react-native";

export const Theme = {
  primaryColor: "#523A5C"
};

export const DateOptions = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
};

export const Styles = StyleSheet.create({
  HeaderStyle: {
    backgroundColor: Theme.primaryColor,
    height: Platform.OS === 'android' ? 90 : undefined,
    paddingTop: Platform.OS === 'android' ? 30 : undefined,
    alignItems:Platform.OS === 'android' ? 'center':undefined
  },
  ContainerStyle: {
    // paddingTop: Expo.Constants.statusBarHeight,
    backgroundColor: Theme.primaryColor,
    flex: 1
  },
  ContentStyle: {
    backgroundColor: "#f4f4f4",
    flex: 1,
    padding: 10
  }
});
