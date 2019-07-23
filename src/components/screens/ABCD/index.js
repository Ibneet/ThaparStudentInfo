import { createStackNavigator } from "react-navigation";

import ABCD from "./ABCD";

export default (ABCDScreen = createStackNavigator(
  {
    ABCD: {
      screen: ABCD,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));