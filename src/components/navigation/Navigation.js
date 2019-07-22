import React from "react";
import {
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import { Footer } from "native-base";
import SideBar from "./SideBar/SideBar.js";
import { Root } from "native-base";
import TabBar from "./TabBar/TabBar.js";
import NewsScreen from "../screens/News/index.js";
import HomeScreen from "../screens/Home/index.js";
import SocietiesScreen from "../screens/Societies/index.js";
// import Drawer from "./Drawer";
import CampusOverflowScreen from "../screens/CampusOverflow/index.js";
import ProfileScreen from "../screens/Profile/index.js";

const Tabs = createBottomTabNavigator(
  {
    Home: HomeScreen,
    News: NewsScreen,
    // Drawer: {
    //   screen: Drawer
    // },
    CampusOverflow: CampusOverflowScreen,
    Profile: ProfileScreen
  },
  {
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "gray",
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        backgroundColor: "#000"
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: SideBar,
    drawerWidth: 300,
    hideStatusBar: true
  }
);
const AppNavigator = createStackNavigator(
  {
    DrawerNavigator: {
      screen: DrawerNavigator
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
export default class Navigation extends React.Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}
