import { Text, View } from "react-native";
import React, { Component } from "react";



interface Props {
        isLoading: boolean,
        page: number,
        lastPage: number | null,
}

export default class ClassComponent extends Component<Props,State> {
  
  constructor (props: Props){
    super(props)
    this.state = {
        isLoading: false,
        page: 1,
        lastPage: null,
    }
  }
    render() {
    return (
      <View>
        <Text>ClassComponent</Text>
      </View>
    );
  }
}

