import React, { Component } from "react";
import { StyleSheet, View, FlatList } from 'react-native';
import data from "../data.json";
import colors from "../assets/colors";
import {ExerciceCard, ExerciceFilter} from "../components/";

export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <View
                    style={styles.filtersContainer}>
                    <FlatList
                        horizontal
                        data={data.filters}
                        renderItem={({ item }) => <ExerciceFilter item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

                <View
                    style={styles.exercicesContainer}>
                    <FlatList
                        data={data.exercices}
                        contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 20 }}
                        renderItem={({ item }) => <ExerciceCard item={item} />}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_background_color,
    },
    filtersContainer: {
        padding: 10,
        borderRadius: 8,
        marginTop: 15,
        marginHorizontal: 20,
        backgroundColor: colors.secondary_background_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    exercicesContainer: {
        flex: 2,
        marginTop: 10,
        marginBottom: 15
    }
});