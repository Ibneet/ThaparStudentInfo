import React from "react";
import { TabNavigator } from "react-navigation";
import {Footer} from 'native-base'
import SideBar from "./SideBar/SideBar.js";
import { Root } from "native-base";
import TabBar from './TabBar/TabBar.js'
import NewsScreen from '../screens/News/index.js';
import PeopleScreen from '../screens/People/index.js';
import LecturesScreen from '../screens/Lectures/index.js';
import GradesScreen from '../screens/Grades/index.js';
import TimeTableScreen from '../screens/Exams/index.js'
import CoursesScreen from '../screens/Courses/index.js'
import HomeScreen from '../screens/Home/index.js'
import SocietiesScreen from '../screens/Societies/index.js'
import Drawer from './Drawer'

const AppNavigator = TabNavigator(
  {
   
    Home: {
      screen: HomeScreen
    },
    News: {
      screen: NewsScreen
    },
    Drawer: {
      screen: Drawer,
    },
    // Exams: {
    //   screen: TimeTableScreen,
    // },
    // News: {
    //   screen: NewsScreen,
    // },
    // People: {
    //   screen: PeopleScreen,
    // },
    // Lectures: {
    //   screen: LecturesScreen,
    // },
    // Grades: {
    //   screen: GradesScreen,
    // },
    // Courses: {
    //   screen: CoursesScreen,
    // },
    // Societies: {
    //   screen: SocietiesScreen,
    // },
   
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => <TabBar {...props} />,
    swipeEnabled: false
  }
);

export default class Navigation extends React.Component{
  render(){
    return(
      <Root>
        <AppNavigator />
      </Root>
    )
  }
}