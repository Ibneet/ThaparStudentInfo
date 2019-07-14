import React from "react";
import {
  StatusBar,
  TouchableHighlight,
  View,
  Image,
  AsyncStorage,
  StyleSheet
} from "react-native";
import TimeAgo from "react-native-timeago";
import ModalWrapper from "react-native-modal-wrapper";
import { Agenda } from "react-native-calendars";
import {
  Button,
  Text,
  Container,
  Body,
  Header,
  H1,
  H2,
  H3,
  Title,
  Left,
  List,
  Icon,
  Right,
  Spinner
} from "native-base";
import Expo from "expo";
import { Overlay } from "react-native-elements";
import { Theme, Styles } from "../../../appStyles.js";
import moment from "moment";

import Modal from "react-native-modal";

export default class Exams extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      exams: [],
      modalVisible: false,
      exam: null,
      isReady: false,
      items: {}
    };
  }

  componentWillMount() {
    this.setExamsList();
  }

  /**
   * Gets and sets the list of exams to be displayed.
   * This time from the local storage
   */
  async setExamsList() {
    try {
      const userExams = await AsyncStorage.getItem("exams");

      if (userExams !== null) {
        //console.log(JSON.parse(userExams))

        this.setState({
          exams: this.sortExams(JSON.parse(userExams)),
          isReady: true
        });
      } else console.log("No data");
    } catch (error) {
      // Error retrieving data
      console.log("Error retrieving your data");
    }
  }

  /**
   * Sort exams by date
   * @param exams array list of exams
   * @return array of sorted exams sorted by date
   */
  sortExams = exams => {
    // Sort the date

    exams.sort(function(a, b) {
      var dateA = moment(a.date + " " + a.from),
        dateB = moment(b.date + " " + b.from);
      return dateA - dateB;
    });

    // Return the sorted exams

    return exams;
  };

  /**
   * Show the details of the exam in a modal window
   */
  showExamDetails = () => {
    return (
      <Overlay
        isVisible={this.state.modalVisible}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
      >
        <Text>Hello from Overlay!</Text>
      </Overlay>
    );
  };

  render() {
    let exams = this.state.exams;

    if (this.state.isReady) {
      return (
        <Container style={Styles.ContainerStyle}>
          <Header hasTabs style={Styles.HeaderStyle}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Exams</Title>
            </Body>
            <Right />
          </Header>

          <Agenda
            items={this.state.items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={"2017-05-16"}
            renderItem={this.renderItem.bind(this)}
            renderEmptyDate={this.renderEmptyDate.bind(this)}
            rowHasChanged={this.rowHasChanged.bind(this)}
            // markingType={'period'}
            // markedDates={{
            //    '2017-05-08': {textColor: '#666'},
            //    '2017-05-09': {textColor: '#666'},
            //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
            //    '2017-05-21': {startingDay: true, color: 'blue'},
            //    '2017-05-22': {endingDay: true, color: 'gray'},
            //    '2017-05-24': {startingDay: true, color: 'gray'},
            //    '2017-05-25': {color: 'gray'},
            //    '2017-05-26': {endingDay: true, color: 'gray'}}}
            // monthFormat={'yyyy'}
            // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
            //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
          />
        </Container>
      );
    } else {
      return (
        <View
          style={[
            Styles.ContentStyle,
            { justifyContent: "center", alignItems: "center" }
          ]}
        >
          <Spinner />
          <Text>Loading exams...</Text>
        </View>
      );
    }
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: "Item for " + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});
const modalanim = 500;
