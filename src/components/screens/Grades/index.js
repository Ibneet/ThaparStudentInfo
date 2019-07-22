import { createStackNavigator } from "react-navigation";
import GradesSummary from "./GradesSummary.js";
import GradesDetails from "./GradesDetails.js";

export default (GradesScreen = createStackNavigator(
  {
    GradesSummary: {
      screen: GradesSummary,
      navigationOptions: { header: null }
    },
    GradesDetails: {
      screen: GradesDetails,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
