import { createStackNavigator } from "react-navigation";

import Profile from "./Profile";
import EditProfile from "./EditProfile";

export default (ProfileScreen = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: { header: null }
    },
    EditProfile: {
      screen: EditProfile,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
