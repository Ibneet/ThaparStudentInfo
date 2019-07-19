import { StackNavigator } from "react-navigation";

import TimeTable from "./TimeTable.js";

export default TimeTableScreen = StackNavigator(
    {
        TimeTable: {
            screen: TimeTable,
            navigationOptions: { header: false }
        },
    },
    {
        headerMode: 'screen',
    }
);
