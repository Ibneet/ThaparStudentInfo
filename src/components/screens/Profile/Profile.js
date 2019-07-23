import React from 'react';
import { View } from 'react-native';
import { Container, Header,Icon, Button, Text, Left, Body, Title, Right } from 'native-base';
import { Styles } from '../../../appStyles.js'

export default class Courses extends React.Component {
  
  render() {
    return(
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
            <Title>Profile</Title>
            </Body>
            <Right/>
            </Header>  
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
            </View>
        </Container>
    );
  }
}
