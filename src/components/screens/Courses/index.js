import { createStackNavigator } from "react-navigation";

import Courses from "./Courses.js";
import Teachers from "./Teachers";
import Prerequisites from "./Prerequisites";
import Notes from "./Notes";
import FutureScope from "./FutureScope";

export default (CoursesScreen = createStackNavigator(
  {
    Courses: {
      screen: Courses,
      navigationOptions: { header: null }
    },
    Teachers: {
      screen: Teachers,
      navigationOptions: { header: null }
    },
    Prerequisites: {
      screen: Prerequisites,
      navigationOptions: { header: null }
    },
    Notes: {
      screen: Notes,
      navigationOptions: { header: null }
    },
    FutureScope: {
      screen: FutureScope,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
