import { createStackNavigator } from "react-navigation";

import People from "./People.js";
import Person from "./Person.js";

export default (PeopleScreen = createStackNavigator(
  {
    People: {
      screen: People,
      navigationOptions: { header: null }
    },
    Person: {
      screen: Person,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
