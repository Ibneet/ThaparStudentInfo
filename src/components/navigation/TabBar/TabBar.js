import React from "react";
import { Image, View, FlatList } from "react-native";

import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Footer
} from "native-base";

const main_routes = [
  {
    title: "ABCD",
    icon: { name: "globe", type: "Ionicons" }
  },
  {
    title: "News",
    icon: { name: "notifications", type: "Ionicons" }
  },
  {
    title: "Home",
    icon: { name: "home", type: "Ionicons" }
  },
  {
    title: "CampusOverflow",
    icon: { name: "planet", type: "Ionicons" }
  },

  {
    title: "Profile",
    icon: { name: "person", type: "Ionicons" }
  }
];

export default class TabBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Tab Bar did mount");
  }

  render() {
    return (
      <View
        style={{
          // justifyContent: "center",
          // alignItems: "center",
          flex: 0.067,
          backgroundColor: "#333945",
          paddingBottom: 5
        }}
      >
        <View>{this.Tab()}</View>
      </View>
    );
  }

  Tab() {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={main_routes}
        numColumns={5}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View>
            <ListItem
              onPress={() => this.props.navigation.navigate(item.title)}
            >
              <Icon
                name={item.icon.name}
                type={item.icon.type}
                style={{ color: "white", fontSize: 26, marginRight: 18 }}
              />
            </ListItem>
          </View>
        )}
      />
    );
  }
}
