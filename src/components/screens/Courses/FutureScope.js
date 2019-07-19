import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Icon, Button, Text, Left, Body, Title, Right } from 'native-base';
import { Styles } from '../../../appStyles.js'

export default class FutureScope extends React.Component {
  render() {
    return(
        <Container style={Styles.ContainerStyle}>
            <Header hasTabs style={Styles.HeaderStyle}>
            <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
            </Left>
            <Body>
                <Title>FutureScope</Title>
            </Body>
            <Right />
            </Header>  
            <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container1}>
                <Text>Future Scope</Text>
            </View>
            </View>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex:1, 
    flexDirection: 'row-reverse', 
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
})