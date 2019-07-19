import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "./SideBar/SideBar.js";
import { Root } from "native-base";

import NewsScreen from '../screens/News/index.js';
import PeopleScreen from '../screens/People/index.js';
import LecturesScreen from '../screens/Lectures/index.js';
import GradesScreen from '../screens/Grades/index.js';
import TimeTableScreen from '../screens/Exams/index.js'
import CoursesScreen from '../screens/Courses/index.js'
import HomeScreen from '../screens/Home/index.js'
import SocietiesScreen from '../screens/Societies/index.js'

const AppNavigator = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { header: false }
    },
    Exams: {
      screen: TimeTableScreen,
      navigationOptions: { header: false }
    },
    News: {
      screen: NewsScreen,
      navigationOptions: { header: false }
    },
    People: {
      screen: PeopleScreen,
      navigationOptions: { header: false }
    },
    Lectures: {
      screen: LecturesScreen,
      navigationOptions: { header: false }
    },
    Grades: {
      screen: GradesScreen,
      navigationOptions: { header: false }
    },
    Courses: {
      screen: CoursesScreen,
      navigationOptions: { header: false }
    },
    Societies: {
      screen: SocietiesScreen,
      navigationOptions: { header: false }
    }

  },
  {
    contentComponent: props => <SideBar {...props} />
  },
  {
    initialRouteName: "News",
    headerMode: 'screen'
  }
);

export default class Navigation extends React.Component {


  constructor(props) {
    super(props);

    
    

  }

  render() {
    return (
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}


