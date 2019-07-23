import React, { useEffect } from "react";
import { Image, View, FlatList } from "react-native";

import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Footer
} from "native-base";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
export default (TabBarComponent = props => {
  return <BottomTabBar {...props} />;
});
