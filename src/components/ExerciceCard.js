import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import images from "../assets/images";
import colors from '../assets/colors';

export default class ExerciceCard extends Component {

    render() {

        const { item } = this.props;

        const imageName = item.image.replace("img/", "").replace(".png", "");

        let todayBackgroundColor = null;
        let yesterdayBackgroundColor = null;
        if (item.when === "today") {
            todayBackgroundColor = colors.today;
        } else if (item.when === "yesterday") {
            yesterdayBackgroundColor = colors.yesterday;
        }

        return (
            <View style={styles.cardContainer}>

                <View style={styles.cardLeftSide}>
                    <View
                        style={styles.cardCircle}>
                        <Image source={images[imageName]} />
                    </View>
                </View>

                <View style={styles.cardRightSide}>

                    <Text style={styles.exerciceName}>
                        {item.name.toUpperCase()}
                    </Text>

                    <View style={styles.exerciceNumbersContainer}>
                        <View style={styles.rowView}>
                            <Image source={require("../assets/images/ic_bike.png")} />
                            <Text style={styles.exerciceNumbers}>
                                {item.calories} Kcal
                            </Text>
                        </View>
                        <View style={{ borderLeftWidth: .5, borderLeftColor: colors.gray }} />
                        <View style={styles.rowView}>
                            <Image source={require("../assets/images/ic_time.png")} />
                            <Text style={styles.exerciceNumbers}>
                                {(item.time % 60) === 0 ? `${item.time / 60}h` : `${item.time} min`}
                            </Text>
                        </View>
                        <View style={{ borderLeftWidth: .5, borderLeftColor: colors.gray }} />
                        <View style={styles.rowView}>
                            <Image source={require("../assets/images/ic_balance.png")} />
                            <Text style={styles.exerciceNumbers}>
                                {item.weight} kg
                            </Text>
                        </View>
                    </View>

                    <View style={styles.whenContainer}>
                        <Text style={[styles.whenButton, { backgroundColor: todayBackgroundColor }]}>HOJE</Text>
                        <Text style={[styles.whenButton, { marginLeft: 10, backgroundColor: yesterdayBackgroundColor }]}>ONTEM</Text>
                    </View>

                </View>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 8,
        flexDirection: 'row',
        marginVertical: 15,
        padding: 10,
        backgroundColor: '#323C47',
        height: 120,
        alignItems: 'center'
    },
    cardLeftSide: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardCircle: {
        borderRadius: 45,
        backgroundColor: '#262F38',
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardRightSide: {
        flex: 2,
        marginLeft: 25,
        marginRight: 5
    },
    exerciceName: {
        fontFamily: 'Montserrat Regular',
        fontSize: 20,
        color: 'white'
    },
    exerciceNumbersContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    rowView: {
        flexDirection: 'row'
    },
    exerciceNumbers: {
        fontFamily: 'Montserrat Regular',
        fontSize: 11,
        color: '#FEFFFF',
        marginLeft: 5
    },
    whenContainer: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 10
    },
    whenButton: {
        fontFamily: 'Montserrat ExtraLight',
        fontSize: 11,
        width: 80,
        textAlign: 'center',
        color: colors.white,
        borderColor: colors.gray,
        borderWidth: 1,
        padding: 5,
        borderRadius: 15,
    }
});
