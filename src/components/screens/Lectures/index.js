import { createStackNavigator } from "react-navigation";

import Lectures from "./Lectures.js";
import SavedCourses from "./SavedCourses.js";
import CourseList from "./CourseList.js";

export default (LecturesScreen = createStackNavigator(
  {
    Lectures: {
      screen: Lectures,
      navigationOptions: { header: null }
    },
    SavedCourses: {
      screen: SavedCourses,
      navigationOptions: { header: null }
    },
    CourseList: {
      screen: CourseList,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
