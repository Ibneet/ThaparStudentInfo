import { createStackNavigator } from "react-navigation";

import Departments from "./Departments";
import Teacher from "./Teacher";
import TeacherDetails from "./TeacherDetails"

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
    TeacherDetails: {
      screen: TeacherDetails,
      navigationOptions: { header: null }
    },
  },
  {
    headerMode: "screen"
  }
));
