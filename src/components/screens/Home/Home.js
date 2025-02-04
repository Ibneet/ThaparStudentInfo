import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Platform, ScrollView} from "react-native";
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
import Timeline from "react-native-timeline-feed"

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name:"Kakashi Hatake"
    }
  }
  lectures= [
    
        {
          time: "8-9", 
          title: "Probability And Statistics", 
          description: "Prof. RK Sharma (Lecture) \nLP105",
          lineColor: "#009688",
        },
        {
          time: "9-10", 
          title: "Manfacturing Process", 
          description: "Dr. Anuj Verma (Lecture) \nLP105"
        },
        {
          time: "10-11", 
          title: "Advanced Computer Networks", 
          description: "Prof. Maninder Singh (Lecture) \nLP106"
        },
        {
          time: "11-12", 
          title: "Database Management System", 
          description: "Dr. Sangita Roy (Lecture) \nLP106"
        },
        {
          time: "12-1", 
          title: "Lunch Break", 
          description: "And some students dont't have one so enjoy!"
        },
        {
          time: "1-3", 
          title: "Probability And Statistics", 
          description: "Prof. RK Sharma (Lab) \nL408",
          lineColor: "#7CEC9F",
        },
  ];
  Meetings= [
    {
      time: "5-7",
      title: "Toasmasters Club",
      description: "100th Meeting at NOC",
      lineColor: "#F5BCBA"
    }
  ]
  OtherPlans= [
    {
      time: "19:00",
      title: "Football Match",
      description: "All the best for URJA Finals.",
      lineColor: "#FBD28B"
    }
  ]

  render() {
    let photo = this.props.navigation.getParam("photo", "empty")
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
        <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#EAF0F1",
            paddingTop: 5,
            paddingLeft: 5
          }}
        >
          <View style={{flexDirection:"row"}}>
           <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
                <View style={[styles.imageHolder]}>
                <Image 
                resizeMode = "center"
                style={{height:101,width:101,alignSelf:"center"}}
                source={
                    photo === "empty"? require("../../assets/kakashi.png") : photo
                }
                />
                </View>
            </TouchableOpacity>   
            <Text style={{fontSize:25, margin: Platform.OS === "ios"?35:undefined, marginTop: Platform.OS === "ios"?undefined:35,marginLeft: Platform.OS === "ios"?undefined:10, fontFamily:"Roboto_medium", color: "#2C3335"}}>Hi! {this.state.name}</Text>
          </View>
          <View style={{flex:1, margin:5}}>
            <Text style={{ fontSize:18, fontWeight:"bold", margin: 5, marginBottom:20}}>Let's see what we have today</Text>
            <View style={{backgroundColor:"#7CEC9F", marginBottom: 5, borderRadius:20}}>
              <Text style={[styles.heading,{backgroundColor: "#10A881"}]}>Lectures</Text>
              <Timeline
                    data={this.lectures}
                    innerCircleType="icon"
                    circleSize={20}
                    lineColor="rgb(45,156,219)"
                    timeContainerStyle={{minWidth:52, marginTop: -5}}
                    timeStyle={{alignItems: "center", color:"white", padding:1}}
                    descriptionStyle={{color:"gray"}}
                  />
              </View>
              <View style={{backgroundColor:"#F5BCBA", marginBottom: 5, borderRadius:20}}>
              <Text style={[styles.heading,{backgroundColor:'#EA7773'}]}>Meetings</Text>
              <Timeline
                    data={this.Meetings}
                    innerCircleType="icon"
                    circleSize={20}
                    lineColor="rgb(45,156,219)"
                    timeContainerStyle={{minWidth:52, marginTop: -5}}
                    timeStyle={{alignItems: "center", color:"white", padding:1}}
                    descriptionStyle={{color:"gray"}}
                  />
              </View>
              <View style={{backgroundColor:"#FBD28B", marginBottom: 5, borderRadius:20}}>
              <Text style={[styles.heading,{backgroundColor:'#E5B143'}]}>Other Plans</Text>
              <Timeline
                    data={this.OtherPlans}
                    innerCircleType="icon"
                    circleSize={20}
                    lineColor="rgb(45,156,219)"
                    timeContainerStyle={{minWidth:52, marginTop: -5}}
                    timeStyle={{alignItems: "center", color:"white", padding:1}}
                    descriptionStyle={{color:"gray"}}
                  />
              </View>
          </View>
        </View>
        </ScrollView>
      </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  imageHolder: {
    height:100,
    width:100,
    borderColor:"black",
    borderWidth:2,
    borderRadius:50,
    overflow: "hidden",
    justifyContent:"center"
  
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 28,
    borderRadius:20,
    paddingLeft: 8
  }
})