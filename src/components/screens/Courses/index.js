import { StackNavigator } from "react-navigation";

import Courses from "./Courses.js";
import Teachers from "./Teachers";
import Prerequisites from "./Prerequisites";
import Notes from "./Notes";
import FutureScope from "./FutureScope";

export default CoursesScreen = StackNavigator(
    {
        Courses: {
            screen: Courses,
            navigationOptions: { header: false }
        },
        Teachers: {
            screen: Teachers,
            navigationOptions: { header: false }
        },
        Prerequisites: {
            screen: Prerequisites,
            navigationOptions: { header: false }
        },
        Notes: {
            screen: Notes,
            navigationOptions: { header: false }
        },
        FutureScope: {
            screen: FutureScope,
            navigationOptions: { header: false }
        }
    },
    {
        headerMode: 'screen',
    }
);
