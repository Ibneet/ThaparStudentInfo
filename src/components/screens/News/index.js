import { createStackNavigator } from "react-navigation";

import News from "./NewsFeed.js";
import NewsCategories from "./NewsCategories.js";
import NewsItem from "./NewsItem.js";

export default (NewsScreen = createStackNavigator(
  {
    News: {
      screen: News,
      navigationOptions: { header: null }
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
