import { createStackNavigator } from "react-navigation";

import Departments from "./Departments";
import Teacher from "./Teacher";

export default (TeacherScreen = createStackNavigator(
  {
    Faculty: {
      screen: Departments,
      navigationOptions: { header: null }
    },
    Teachers: {
      screen: Teacher,
      navigationOptions: { header: null }
    },
  },
  {
    headerMode: "screen"
  }
));
