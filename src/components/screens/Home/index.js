import { createStackNavigator } from "react-navigation";

import Home from "./Home.js";
import { Icon } from "native-base";
var navigationOptions = {
  header: null
};

export default (HomeScreen = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: navigationOptions
    }
  },
  {
    headerMode: "float"
  }
));
