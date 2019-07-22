import { createStackNavigator } from "react-navigation";

import Societies from "./Societies";

export default (SocietiesScreen = createStackNavigator(
  {
    Societies: {
      screen: Societies,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
