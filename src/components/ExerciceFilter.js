import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import images from "../assets/images";
import colors from "../assets/colors";

export default class ExerciceFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    _toogleActive = () => {
        this.setState({ checked: !this.state.checked });
    }

    render() {

        const { checked } = this.state;
        const { item } = this.props;
        const imageName = item.image.replace("img/", "").replace(".png", "");

        return (
            <TouchableOpacity onPress={() => this._toogleActive()}>
                <LinearGradient
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 2 }}
                    colors={[colors.gradient_start, colors.gradient_end]}
                    style={styles.filterContainer}>
                    <Image
                        source={images[imageName]} />
                </LinearGradient>
                {checked &&
                    <View style={styles.checked}>

                        <Icon
                            name="check"
                            size={15}
                            color={colors.white}
                        />
                    </View>}
            </TouchableOpacity>
        );

    }
}

const styles = StyleSheet.create({
    filterContainer: {
        borderRadius: 25,
        margin: 5,
        padding: 10,
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checked: {
        backgroundColor: colors.yesterday,
        width: 15,
        height: 15,
        borderRadius: 7,
        position: 'absolute',
        top: 5,
        right: 5
    }
});