import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import colors from "../assets/colors";

export default class Header extends Component {

    render() {

        const { title } = this.props;

        return (
            <View style={styles.headerContainer}>
                <View style={styles.headerStyles}>
                    <TouchableOpacity onPress={null}>
                        <Icon
                            name="menu"
                            size={25}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textHeaderStyles}>{title}</Text>
                    <TouchableOpacity onPress={null}>
                        <Icon
                            name="settings"
                            size={25}
                            color={colors.white}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
            </View>
        );

    }

}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        backgroundColor: colors.primary_background_color,
    },
    headerStyles: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textHeaderStyles: {
        fontFamily: 'Montserrat ExtraLight',
        color: colors.white,
        fontSize: 24
    },
    separator: {
        borderBottomColor: colors.gray,
        borderBottomWidth: 1
    }
});
