import { createStackNavigator } from "react-navigation";

import CampusOverflow from "./CampusOverflow";

export default (CampusOverflowScreen = createStackNavigator(
  {
    CampusOverflow: {
      screen: CampusOverflow,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
