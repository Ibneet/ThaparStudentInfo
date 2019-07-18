import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity,TouchableHighlight, Alert } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Left, Body, Title, Right, Thumbnail, ListItem } from 'native-base';
import { DateOptions, Theme, Styles } from '../../../appStyles.js'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'

export default class CLO extends React.Component {
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
                <Title>Course Layout</Title>
            </Body>
            <Right />
            </Header>  
            <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container1}>
                <Text>Course Layout</Text>
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