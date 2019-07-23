import React from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Icon,
  Button,
  Text,
  Left,
  Body,
  Title,
  Right
} from "native-base";
import { Styles } from "../../../appStyles.js";

export default class Courses extends React.Component {
  render() {
    return (
      <Container style={Styles.ContainerStyle}>
        <Header hasTabs style={Styles.HeaderStyle}>
        <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.openDrawer()}
              >
               <Icon name= "menu"/>
              </Button>
              </Left>
            <Body>
            <Title>Home</Title>
            </Body>
            <Right/>
        </Header>
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Home Screen</Text>
        </View>
      </Container>
    );
  }
}
