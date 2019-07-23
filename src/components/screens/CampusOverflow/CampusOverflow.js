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

export default class CampusOverflow extends React.Component {
  render() {
    return (
      <Container style={Styles.ContainerStyle}>
        <Header hasTabs style={Styles.HeaderStyle}>
            <Title>Campus Overflow</Title>
        </Header>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>Campus Overflow</Text>
        </View>
      </Container>
    );
  }
}
