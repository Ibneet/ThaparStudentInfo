import React from 'react';
import { View, StyleSheet, FlatList, TouchableHighlight, Linking } from 'react-native';
import { Container, Header, Icon, Button, Text, Left, Body, Title, Right, ListItem } from 'native-base';
import { Styles } from '../../../appStyles.js'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'

const subjects = [
  {
    course_title: "Manufacturing Process",
    course_id: "UTA002",
    course_site: 'https://sites.google.com/a/thapar.edu/thapar-uta002-manufacturing-processes/home'
  },
  {
    course_title: "Probability and Statistics",
    course_id: "UCS408",
    course_site: 'https://sites.google.com/a/thapar.edu/ucs408_pns/?pli=1'
  }
];

const features = [
  {
    key: 'Course Layout'
  },
  {
    key: 'Teachers'
  },
  {
    key: 'Prerequisites'
  },
  {
    key: 'Future Scope'
  }
]

export default class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      id: '',
      site:''
    }
  }

  toggleModal(visible) {
    this.setState({ visibleModal: visible });
 }

  _renderButton = () => (
      <View>
        <View style={styles.opt}>
          <View style={{paddingLeft:145}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{this.state.id}</Text>
          </View>
          <View style={{paddingRight:10}}>
          <TouchableHighlight
                  
                  onPress={() => {
                    this.toggleModal(!this.state.visibleModal);
                  }}>
                  
                  <Ionicons
                    name='md-close-circle'
                    size={32}
                  />
          </TouchableHighlight>
          </View>
        </View>
            <Button
            style={styles.butt}
            full
            onPress={()=>{ Linking.openURL(this.state.site),this.toggleModal(!this.state.visibleModal)}}>
              <Text style={{color:'black'}}>Course Site</Text>
            </Button>
            <Button
            style={styles.butt}
            full
            onPress={()=>{this.props.navigation.navigate('Teachers'),this.toggleModal(!this.state.visibleModal)}}>
              <Text style={{color:'black'}}>Teachers</Text>
            </Button>
            <Button
            style={styles.butt}
            full
            onPress={()=>{this.props.navigation.navigate('Prerequisites'),this.toggleModal(!this.state.visibleModal)}}>
              <Text style={{color:'black'}}>Prerequisites</Text>
            </Button>
            <Button
            style={styles.butt}
            full
            onPress={()=>{this.props.navigation.navigate('Notes'),this.toggleModal(!this.state.visibleModal)}}>
              <Text style={{color:'black'}}>Notes</Text>
            </Button>
            <Button
            style={styles.butt}
            full
            onPress={()=>{this.props.navigation.navigate('FutureScope'),this.toggleModal(!this.state.visibleModal)}}>
              <Text style={{color:'black'}}>Future Scope</Text>
            </Button>
            
      </View>
  );

  render() {
    return(
        <Container style={Styles.ContainerStyle}>
            <Header hasTabs style={Styles.HeaderStyle}>
            <Left>
                <Button
                transparent
                onPress={() => this.props.navigation.navigate("Navigation")}>
                <Icon name="menu" />
                </Button>
            </Left>
            <Body>
                <Title>Courses</Title>
            </Body>
            <Right />
            </Header>  
            <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={subjects}
              extraData={subjects}
              renderItem={({ item }) => (
                <View>
                  <ListItem onPress={() =>{this.toggleModal(true);this.setState({id:item.course_id});this.setState({site:item.course_site})}}>
                        <Body>
                          <Text>{item.course_title}</Text>
                        </Body>
                        <Right>
                          <Text>{item.course_id}</Text>
                        </Right>
                      </ListItem>
                    
                  
                </View>
              )}
            />
            </View>
            <Modal isVisible = {this.state.visibleModal} style={styles.bottomModal} onRequestClose={() => {
              this.toggleModal(!this.state.visibleModal);
          }}>
              {this._renderButton()}
            </Modal>
          </Container>
    );
  }
}

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  opt: {
    height: 50,
    width: '100%',
    backgroundColor: '#B83227',
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems:'center',
    borderBottomWidth:1,
    borderColor:'black'
    
  },
  butt: {
    borderColor: 'black',
    borderBottomWidth:1,
    backgroundColor: '#A4B0BD',
    
  }
})