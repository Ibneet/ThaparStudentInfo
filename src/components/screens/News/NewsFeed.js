import React from "react";
import { View, StyleSheet } from "react-native";
import { Theme, Styles } from "../../../appStyles.js";
import moment from "moment";

import {
  Button,
  Text,
  Container,
  Thumbnail,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Tab,
  Tabs,
  ScrollableTab,
  List,
  ListItem
} from "native-base";

export default class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: ["Feed"]
    };
  }

  render() {
    var feeds = ["My Campus", "Outside Campus"];
    if (this.props.navigation.state.params) {
      if (this.props.navigation.state.params.feeds) {
        feeds = feeds.concat(this.props.navigation.state.params.feeds);
      }
    }
    this.state.feeds = feeds;

    return (
      <Container style={Styles.ContainerStyle}>
        <Header hasTabs style={Styles.HeaderStyle}>
        <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon name="menu" />
              </Button>
              </Left>
            <Body>
            <Title>Notifications</Title>
            </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("NewsCategories")}
            >
              <Icon name="options" type="SimpleLineIcons" />
            </Button>
          </Right>
        </Header>

        <Tabs
          style={{
            backgroundColor: "#312418"
          }}
        >
          {feeds.map(feed => (
            <Tab
              heading={feed}
              key={feeds.indexOf(feed)}
              tabStyle={{ backgroundColor: "#312418"}}
              activeTabStyle={{ backgroundColor: "#312418" }}
            >
              {this.renderNewsItem(feed)}
            </Tab>
          ))}
        </Tabs>
      </Container>
    );
  }

  renderNewsItem(feedCategory) {
    // Select news from databaase where category is equals to feed Category

    // Demo data
    var feeds = [
      {
        id: 0,
        title: "Main Library Study Room are Now Open 24 Hours",
        body:
          "All Areas of the Main Library Study Room are Now Open 24 Hours. From now on, all areas of the Main Library Study Room are open 24 hours. Laptop use is allowed in Area A, but banned in Area B and C. ",
        thumbnailUrl:
          "http://radioilijas.ba/wp-content/uploads/2016/04/books-in-home-library.jpg",
        created_at: "2018-04-25T18:39:20.526Z",
        category: feedCategory
      },
      {
        id: 1,
        title: "New Clinic Instructor Mrs. Wisnieski, BSN, RN. says Hello!",
        body:
          "Mrs. Wisnieski, BSN, RN. Hello! I am very proud to be the School Nurse at Reagan Middle School since it opened in 2012. I have been a nurse 20 plus years. The majority of my career has been in pediatrics. This is my sixth year as a school nurse in PWCS, and my fourth year as the Reagan Middle",
        thumbnailUrl:
          "https://www.binghamton.edu/news/images/uploads/features/BaidooDavisDeshler.jpg",
        created_at: "2018-04-25T18:32:14.780Z",
        category: feedCategory
      }
    ];

    return (
      <Content>
        <List
          dataArray={feeds}
          //contentContainerStyle={{ marginTop: marginTop }}
          renderRow={feed => {
            return (
              <ListItem
                button
                onPress={() =>
                  this.props.navigation.navigate("NewsItem", { feed: feed })
                }
                style={{ borderBottomWidth: 1 }}
              >
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <Thumbnail large square source={{ uri: feed.thumbnailUrl }} />
                  <Body>
                    <Text note numberOfLines={1}>
                      {moment(feed.created_at).format("dddd, MMMM Do YYYY")}
                    </Text>
                    <Text numberOfLines={2} style={{ fontWeight: "bold" }}>
                      {feed.title}
                    </Text>
                    <Text note numberOfLines={1}>
                      {feed.category}
                    </Text>
                  </Body>
                </View>
              </ListItem>
            );
          }}
        />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  // App container
  container: {
    flex: 1, // Take up all screen
    backgroundColor: "#E91E63" // Background color
  },
  // Tab content container
  content: {
    flex: 1, // Take up all available space
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#C2185B" // Darker background for content area
  },
  // Content header
  header: {
    margin: 10, // Add margin
    color: "#FFFFFF", // White color
    fontFamily: "Avenir", // Change font family
    fontSize: 2 // Bigger font size
  },
  // Content text
  text: {
    marginHorizontal: 20, // Add horizontal margin
    color: "rgba(255, 255, 255, 0.75)", // Semi-transparent text
    textAlign: "center", // Center
    fontFamily: "Avenir",
    fontSize: 18
  }
});
