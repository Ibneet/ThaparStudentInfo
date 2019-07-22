import { DrawerNavigator } from "react-navigation";
import React from "react";
import Home from "../screens/Home/index";
import Societies from "../screens/Societies/index.js";
import SideBar from "./SideBar/SideBar.js";
import TimeTableScreen from '../screens/Exams/index.js'
import NewsScreen from '../screens/News/index.js'
import PeopleScreen from '../screens/People/index.js'
import LecturesScreen from '../screens/Lectures/index.js'
import CoursesScreen from '../screens/Courses/index.js'
import GradesScreen from '../screens/Grades/index.js'

export default Drawer = DrawerNavigator(
    {
        SideBar: {
            screen: SideBar,
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
            screen: Societies
        },
        
    },
    {
        contentComponent: props => <SideBar {...props} />
    },
    {
        headerMode: 'screen',
    }
);
