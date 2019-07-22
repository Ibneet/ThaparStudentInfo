import { createStackNavigator } from "react-navigation";

import TimeTable from "./TimeTable.js";

export default (TimeTableScreen = createStackNavigator(
  {
    TimeTable: {
      screen: TimeTable,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
