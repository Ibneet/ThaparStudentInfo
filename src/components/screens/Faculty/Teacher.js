import React, {useState} from 'react';
/**
 * 
 *  Use useState hook to manage local state. Avoid classes.
 * I have written the sampe for the useState below. Follow that.
 *  
 *   */

import { Container, Header, Icon, Button, Left, Body, Title, Right } from 'native-base';

import {  Styles } from '../../../appStyles.js'
import {View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';

const uri = "http://gucaguru.com/wp-content/uploads/sites/7/2015/09/Sensual-Woman-THUMBNAIL-by-Aleksandar-Jovkovic-370x280.jpg"

const teacherArray = [
    {
        name: "Dr. Pamela Brown",
        uri
    },
    {
      name: "Dr. Gurjot Singh",
      uri
  },
  {
    name: "Dr. Manjot Singh",
    uri
}
]

const Teacher =({navigation})=> {
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
              <Title>COMPUTER</Title>
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
      <ScrollView>
      {teacherArray.map(element=>(
             <TouchableOpacity key={element.name} style={styles.button} onPress={()=>navigation.push('TeacherDetails')}>
                 <Image source={{uri:element.uri}} style={styles.image}/>
             <Text style={styles.text}>{element.name}</Text>
           </TouchableOpacity>
          ))}
      </ScrollView>
          </View>
      </Container>
    );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "white",
    alignItems:"center",
    flex: 1,
  },
  text : {
    padding: 16,
    fontSize:20,
    color:"#ed3267",
    fontWeight:"400"
  },
  button : {
    paddingTop:32,
    paddingHorizontal:20,
    width: Dimensions.get("window").width,
    alignItems:"center",
    flexDirection:"row"
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:1,
    borderColor:"#777"
  }
})
export default Teacher
