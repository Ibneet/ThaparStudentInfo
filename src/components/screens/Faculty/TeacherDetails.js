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
          <View style={styles.container}>
            <View style={styles.profile} onPress={()=>navigation.push('TeacherDetails')}>
                <Image source={{uri}} style={styles.image}/>
                <Text style={styles.text}>Dr. Pamela Brown</Text>
            </View>
            <ScrollView style={styles.scroll}>
                <View style={styles.tile}>
                    <Text style={styles.heading}>Designation:</Text>
                    <Text style={styles.text}>Professor and Head</Text>
                </View>
                <View style={styles.tile}>
                    <Text style={styles.heading}>Specialization:</Text>
                    <Text style={styles.text}>Network Security, Software Engineering, Parallel and Distributed Computing </Text>
                </View>
                <View style={styles.tile}>
                    <Text style={styles.heading}>Details of Sponsored Research & Consultancy Projects:</Text>
                    <View style={styles.bullet}>
                        <Icon name="ios-disc" style={styles.dot}/>
                        <Text style={[styles.text, {flex:1, textAlign:"left"}]}>Tekchandani, Rajkumar, Rajesh Bhatia, and Maninder Singh. "Semantic code clone detection for Internet of Things applications using reaching definition and liveness analysis." The Journal of Supercomputing (2016): 1-28. [Impact Factor= 1.088] </Text>
                    </View>
                    <View style={styles.bullet}>
                        <Icon name="ios-disc" style={styles.dot}/>
                        <Text style={[styles.text, {flex:1, textAlign:"left"}]}>Chopra, Inderpreet, and Maninder Singh. "SHAPE—an approach for self-healing and self-protection in complex distributed networks." The Journal of Supercomputing 67, no. 2 (2014): 585-613. [Impact Facor=0.85] </Text>
                    </View>
                </View>
            </ScrollView>
          </View>
      </Container>
    );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: "white",
    alignItems:"center",
    width: Dimensions.get("window").width*0.95,
    alignSelf:"center",
    flex: 1,
  },
  text : {
    fontSize:14,
  },
  heading:{
    fontSize:18,
    fontWeight:"bold",
    color:"#777"
  },
  profile : {
    paddingVertical:28,
    alignItems:"center",
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:1,
    borderColor:"#666"
  },
  scroll:{
      width:Dimensions.get("window").width-40,
      alignSelf:"center",
  },
  tile:{
      marginBottom:16
  },
  bullet:{
      flexDirection:"row",
  },
  dot:{
      fontSize:8,
      paddingHorizontal:4,
      paddingTop:4
  }
})
export default Teacher
