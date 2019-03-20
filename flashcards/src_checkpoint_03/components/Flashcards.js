import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { StackNavigator, createAppContainer, createStackNavigator} from "react-navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { reducer } from "../reducers/index";

import Logo from "./Header/Logo";
import DeckScreen from "./DeckScreen";
import NewCardScreen from "./NewCardScreen";
import ReviewScreen from "./ReviewScreen";

let store = createStore(reducer);

let headerOptions = {
  headerStyle: { backgroundColor: "#FFFFFF" },
  headerLeft: <Logo />
};

const navigator = createStackNavigator({
  Home: { screen: DeckScreen, navigationOptions: headerOptions },
  Review: { screen: ReviewScreen, navigationOptions: headerOptions },
  CardCreation: {
    screen: NewCardScreen,
    path: "createCard/:deckID",
    navigationOptions: headerOptions
  }
});
const AppNavigator = createAppContainer(navigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
