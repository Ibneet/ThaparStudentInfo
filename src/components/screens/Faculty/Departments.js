import React, {useState} from 'react';

import { Container, Header, Icon, Button, Left, Body, Title, Right } from 'native-base';

import {  Styles } from '../../../appStyles.js'
import {View, Text, StyleSheet } from "react-native";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const Departments =({navigation})=> {
  const [state, updateState] = useState({
    sampleState: 0
  })
  const setState =newState=> updateState({...state, ...newState})
  const {sampleState} = state;
  const sampleMethod=async ()=>{
    await setState({sampleState:sampleState+1})
    console.log(state);
    
  }
    return (
      <Container style={Styles.ContainerStyle}>
        <Header hasTabs style={Styles.HeaderStyle}>
          <Left>
                <Button
                  transparent
                  onPress={() => navigation.openDrawer()}
                >
                  <Icon name="menu" />
                </Button>
                </Left>
              <Body>
              <Title>FACULTY</Title>
              </Body>
              <Right>
              <Button
                  transparent
                >
                  <Icon name="search" />
                </Button>
              </Right>
        </Header>
          <View padder style={styles.container}>
            <Text style={styles.text}>SELECT</Text>
      <ScrollView>
      {["COMPUTER", "MECHANICAL", "CIVIL", "ELECTRICAL", "CHEMICAL", "BIOTECH"].map(element=>(
             <TouchableOpacity key={element} style={styles.button} onPress={()=>navigation.push('Teachers')}>
             <Text style={styles.text}>{element}</Text>
           </TouchableOpacity>
          ))}
      </ScrollView>
          </View>
      </Container>
    );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "#f4f4f4",
    alignItems:"center",
    flex: 1,
  },
  text : {
    padding: 16,
    fontSize:20
  },
  button : {
    backgroundColor : "pink",
    borderColor: "black",
    alignItems:"center",
    borderWidth: 1,
    borderRadius: 20,
    margin: 12,
    width: 300
  }
})
export default Departments
