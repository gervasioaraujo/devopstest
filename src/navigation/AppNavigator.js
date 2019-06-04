import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ProfileScreen from "../screens/ProfileScreen";
import { Header } from "../components/";

const AppNavigator = createStackNavigator({
    Home: {
        screen: ProfileScreen,
        navigationOptions: {
            header: (<Header title="MEU PERFIL" />),
        },
    }
});

export default createAppContainer(AppNavigator);