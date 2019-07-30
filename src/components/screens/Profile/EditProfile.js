import React from 'react';
import { View, AsyncStorage, Keyboard, TouchableWithoutFeedback, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Header,Icon, Button, Text, Left, Body, Title, Right } from 'native-base';
import { Input } from 'react-native-elements'
import { Styles } from '../../../appStyles.js'

export default class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"Kakashi Hatake",
            bio:"",
            hobbies:"",
            achievements:""
        }
    }

  render() {
    let profilePic = this.props.navigation.getParam("profilePic", "empty")
    return(
        <Container style={Styles.ContainerStyle}>
            <Header hasTabs style={Styles.HeaderStyle}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" />
              </Button>
              </Left>
            <Body>
            <Title>Edit Profile</Title>
            </Body>
            <Right/>
            </Header>  
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 30 }}>
            <TouchableWithoutFeedback
            onPress = {()=> {
                Keyboard.dismiss
            }}
            >
            <ScrollView>
            <TouchableOpacity activeOpacity={0.5} onPress={() => {}} style={{alignItems:"center"}}>
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
            <View style={{padding:10}}>
            <Input
                label="Name"
                placeholder='Name'
                leftIcon={{ name: 'person' }}
                autoCorrect={false}
                padding={10}
                onChangeText={ name => {this.setState({name})} }
            />
            <Input
                label="Bio"
                multiline={true}
                placeholder='Bio'
                leftIcon={{ name:'create' }}
                autoCorrect={false}
                padding={10}
                onChangeText={ bio => {this.setState({bio})} }
            />
            <Input
                label="Hobbies/Interests"
                multiline={true}
                placeholder='Hobbies'
                leftIcon={<Icon
                    name='beer'
                    size={12}
                    color='black'
                  />}
                autoCorrect={false}
                padding={10}
                onChangeText={ bio => {this.setState({hobbies})} }
            />
            <Input
                label="Achievements"
                multiline={true}
                placeholder='Achievements'
                leftIcon={<Icon
                    name='bonfire'
                    size={12}
                    color='black'
                  />}
                autoCorrect={false}
                padding={10}
                onChangeText={ bio => {this.setState({achievements})} }
            />
            </View>
            <Button
            style={{marginTop:20,backgroundColor:"#472F2F"}}
            full
            rounded
            onPress={()=>{this.props.navigation.navigate("Profile",{name:this.state.name,bio:this.state.bio,hobbies:this.state.hobbies, achievements:this.state.achievements})}}
            >
                <Text>Save</Text>
            </Button>
            <View style={{height:500}}></View>
            </ScrollView>
            </TouchableWithoutFeedback>
            </View>
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
    }
})