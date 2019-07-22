import React from "react";
import { TabNavigator } from "react-navigation";
import {Footer} from 'native-base'
import SideBar from "./SideBar/SideBar.js";
import { Root } from "native-base";
import TabBar from './TabBar/TabBar.js'
import NewsScreen from '../screens/News/index.js';
import HomeScreen from '../screens/Home/index.js'
import SocietiesScreen from '../screens/Societies/index.js'
import Drawer from './Drawer'
import CampusOverflow from '../screens/CampusOverflow/index.js'
import ProfileScreen from '../screens/Profile/index.js'

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
    CampusOverflow: {
      screen: CampusOverflow
    },
    Profile: {
      screen: ProfileScreen
    }
    
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