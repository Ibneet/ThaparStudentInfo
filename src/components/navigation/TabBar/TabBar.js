import React from "react";
import { Image, View, FlatList } from "react-native";

import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Footer
} from "native-base";

const main_routes = [
  {
    title: 'SideBar',
    icon: {name: 'menu', type: 'Ionicons'}
  },
  {
    title: 'News',
    icon: {name: 'notifications', type: 'Ionicons'}
  },
  {
    title: 'Home',
    icon: {name: 'home', type: 'Ionicons'}
  },
  {
    title: 'Quora',
    icon: {name: 'globe', type: 'Ionicons'}
  },
  
  {
    title: 'Profile',
    icon: {name: 'person', type: 'Ionicons'}
  },
];

export default class TabBar extends React.Component {


  constructor(props){
    super(props);

  }



componentDidMount() {
  console.log('Tab Bar did mount')
}

  render() {

    return (
      <Container style={{justifyContent:'center',alignItems:'center', flex:0.067, backgroundColor: '#E91E63', paddingBottom:10}}>
        <View style={{ alignItems: 'center'}}>
            {this.Tab()}
        </View>
      </Container>
    );
  }

  Tab()
{
    return(
    <FlatList
              keyExtractor={(item, index) => index.toString()}
              data={main_routes}
              numColumns={5}
              renderItem={({ item }) => (
                <View>
                  <ListItem onPress={() =>this.props.navigation.navigate(item.title)}>
                    <Icon name={item.icon.name} type={item.icon.type} style={{color:'white', fontSize: 26, marginRight: 18}}/>
                  </ListItem>
                    
                  
                </View>
              )}
            />
    )
}
}

