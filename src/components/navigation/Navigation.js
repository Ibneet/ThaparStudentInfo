import React from "react";
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Footer, Icon } from "native-base";
import SideBar from "./SideBar/SideBar.js";
import { Root } from "native-base";
import TabBar from "./TabBar/TabBar.js";
import HomeScreen from "../screens/Home/index.js";
import SocietiesScreen from "../screens/Societies/index.js";
import CampusOverflowScreen from "../screens/CampusOverflow/index.js";
import ProfileScreen from "../screens/Profile/index.js";
import CoursesScreen from "../screens/Courses/index.js";
import TimeTableScreen from "../screens/Exams/index.js";
import NewsScreen from "../screens/News/index.js";
import PeopleScreen from "../screens/People/index.js";
import LecturesScreen from "../screens/Lectures/index.js";
import GradesScreen from "../screens/Grades/index.js";

const Tabs = createBottomTabNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    Societies: SocietiesScreen,
    CampusOverflow: CampusOverflowScreen,
    Profile: ProfileScreen,
    Courses: CoursesScreen,
    Exams: TimeTableScreen,
    People: PeopleScreen,
    Lectures: LecturesScreen,
    Grades: GradesScreen
  },
  {
    tabBarComponent: props => <TabBar {...props} />,
    navigationOptions: {
      header: null
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: SideBar,
    drawerWidth: 300,
    hideStatusBar: true,
    navigationOptions: {
      header: null
    }
  }
);
const AppNavigator = createStackNavigator(
  {
    DrawerNavigator: {
      screen: DrawerNavigator
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class Navigation extends React.Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
