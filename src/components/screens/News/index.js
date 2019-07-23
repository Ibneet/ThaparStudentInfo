import { createStackNavigator } from "react-navigation";

import News from "./NewsFeed.js";
import NewsCategories from "./NewsCategories.js";
import NewsItem from "./NewsItem.js";
import TabBarIcon from "../../TabBarIcon.js";

export default (NewsScreen = createStackNavigator(
  {
    News: {
      screen: News,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused }) => {
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === "ios"
                ? `ios-information-circle${focused ? "" : "-outline"}`
                : "md-information-circle"
            }
          />;
        }
      }
    },
    NewsItem: {
      screen: NewsItem,
      navigationOptions: { header: null }
    },
    NewsCategories: {
      screen: NewsCategories,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: "screen"
  }
));
