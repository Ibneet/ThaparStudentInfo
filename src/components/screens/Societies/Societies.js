import React from 'react';
import { View } from 'react-native';
import { Container, Header,Icon, Button, Text, Left, Body, Title, Right } from 'native-base';
import { Styles } from '../../../appStyles.js'

export default class Societies extends React.Component {
  
  render() {
    return(
        <Container style={Styles.ContainerStyle}>
            <Header hasTabs style={Styles.HeaderStyle}>
            <Left>
                <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Societies</Title>
            </Body>
            <Right />
            </Header>  
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Societies Screen</Text>
            </View>
        </Container>
    );
  }
}
