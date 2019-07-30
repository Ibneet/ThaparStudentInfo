import { createStackNavigator } from "react-navigation";

import Departments from "./Departments";

export default (TeacherScreen = createStackNavigator(
  {
    Teachers: {
      screen: Departments,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
