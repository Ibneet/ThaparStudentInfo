import { createStackNavigator } from "react-navigation";

import Profile from "./Profile";

export default (ProfileScreen = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
