import React, { Component } from "react";
import { Icon } from "expo";

export default class TabBarIcon extends Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? "blue" : "grey"}
      />
    );
  }
}
