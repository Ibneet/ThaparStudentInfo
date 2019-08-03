import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import { Container, Header,Icon, Button, Text, Left, Body, Title, Right, Card } from 'native-base';
import { Styles } from '../../../appStyles.js'
import { Result } from 'expo-background-fetch';
import AutoTags from 'react-native-tag-autocomplete';

const societiesSuggestions = [
    { name: "Toastmasters Club" }, 
    { name: "OWASP" },
    { name: "TNT" }, 
    { name: "NOX" },
    { name: "Enactus" },
    { name: "Pratigya" },
    { name: "Theatre Club" },
]

const skillsSuggestions = [
    { name: "React Native" },
    { name: "Python" },
    { name: "C" },
    { name: "C++" },
    { name: "App Dev" },
    { name: "Web Dev" },
    { name: "Dance" },
    { name: "Singing" },
    { name: "Bhangra" },
    { name: "Machine Learning" },
    { name: "Deep Learning" },
    { name: "Painting" },
    { name: "Drawing" },
    { name: "Drooling" },
    { name: "Public Speeking" }
]


export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      skills:[],
      societies:[],
      societiesTags: societiesSuggestions,
      skillsTags: skillsSuggestions
  }
  }


  skillsDelete = index => {
    //tag deleted, remove from our tags array
    let skills = this.state.skills;
    skills.splice(index, 1);
    this.setState({ skills });
  }

  societiesDelete = index => {
    //tag deleted, remove from our tags array
    let societies = this.state.societies;
    societies.splice(index, 1);
    this.setState({ societies });
  }

  skillsAddition = contact => {
    //suggestion clicked, push it to our tags array
    this.setState({ skills: this.state.skills.concat([contact]) });
  }

  societiesAddition = contact => {
    //suggestion clicked, push it to our tags array
    this.setState({ societies: this.state.societies.concat([contact]) });
  }


  render() {
    let profilePic = this.props.navigation.getParam("profilePic", "empty")
    let name = this.props.navigation.getParam("name", "empty")
    let bio = this.props.navigation.getParam("bio", "empty")
    let hobbies = this.props.navigation.getParam("hobbies", "empty")
    let achievements = this.props.navigation.getParam("achievements", "empty")
    return(
        <Container style={Styles.ContainerStyle}>
            <Header style={{height:200, backgroundColor:"#523A5C",flexDirection:"column",paddingTop: Platform.OS === 'android' ? 50 : 40}}>
              <View style={{flexDirection:"row"}}>
                <Button
                  transparent
                  onPress={() => this.props.navigation.openDrawer()}
                >
                  <Icon name="menu" />
                </Button>
                <Title style={{paddingTop:10}}>Profile</Title>
              </View>
              <Right/>
              <View style={{flexDirection:"column"}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {}} style={{alignItems:"center", marginBottom:Platform.OS === 'android' ? -20 : 5}}>
                    <View style={[styles.imageHolder]}>
                    <Image 
                    resizeMode = "center"
                    style={{height:81,width:81,alignSelf:"center"}}
                    source={
                      profilePic === "empty"? require("../../assets/kakashi.png") : profilePic
                    }
                    />
                    </View>
                </TouchableOpacity> 
                <View style={{flexDirection:"row", marginLeft:Platform.OS === 'android' ? 100 : 120}}>  
                <Text style={styles.textStyle}>{name === "empty"? "Kakashi Hatake" : name}</Text>
                <Icon
                  name="add-circle"
                  style={{color:"#fff", margin:Platform.OS === 'android' ? 30 : 10, marginLeft:Platform.OS === 'android' ? 75 : 80}}
                  onPress={()=>{this.props.navigation.navigate("EditProfile")}}
                />
                </View>
              </View>
            </Header>  
            <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'white', borderTopLeftRadius:20, borderTopRightRadius: 20 }}>
                <Text style={{fontSize:20, fontWeight: "500", margin:30}}>{bio === "empty"? "Hi! I am Campus Tonic" : bio}</Text>
                <View style={styles.autocompleteContainer}>
                <Text style={styles.label}>
                  Skills
                </Text>    
                <AutoTags
                  suggestions={this.state.skillsTags}
                  tagsSelected={this.state.skills}
                  placeholder="Add a skills.."
                  handleAddition={this.skillsAddition}
                  handleDelete={this.skillsDelete}
                />
                </View>
                <View style={styles.autocompleteContainer}>
                <Text style={styles.label}>
                  Societies
                </Text>
                <AutoTags
                  suggestions={this.state.societiesTags}
                  tagsSelected={this.state.societies}
                  placeholder="Add a societies.."
                  handleAddition={this.societiesAddition}
                  handleDelete={this.societiesDelete}
                />
                </View>
                <Text style={[styles.label,{marginTop:30, marginLeft:30, marginBottom:5}]}>
                  Hobbies/Interests
                </Text>
                <Text style={{fontSize:18, fontWeight: "200", marginLeft:30, marginBottom: 30}}>{hobbies === "empty"? "What are your Hobbies" : hobbies}</Text>
                <Text style={[styles.label,{marginTop:5, marginLeft:30, marginBottom:5}]}>
                  Achievements/Certifications
                </Text>
                <Text style={{fontSize:18, fontWeight: "200", marginLeft:30}}>{achievements === "empty"? "What are your Achievements" : achievements}</Text>
                <View style={{height:500}}></View>
            </View>
            
            </ScrollView>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  imageHolder: {
    height:80,
    width:80,
    borderColor:"black",
    borderWidth:2,
    borderRadius:50,
    overflow: "hidden",
    justifyContent:"center"
  },
  textStyle: {
    fontSize:18, 
    margin: Platform.OS === "ios"?18:8,
    marginTop: Platform.OS === "ios"?undefined:35,
    textAlign: "center",
    color:"#fff"
  },
  autocompleteContainer: {
    flex: 1,
    margin: 30
    
  },
  label: {
    color: "#614b63", 
    fontWeight: 'bold',
    fontSize: 20 
  }
 
})