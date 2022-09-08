import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();

import colors from '../../constants/colors';
import style from './style';

const Select = ({
    containerStyle
}) => {

    return (
        <View style={[style.container, style.row, containerStyle]}>
            <View style={style.circle}>
                <Icon name={'check'} size={13} color={colors.text} />
            </View>
            <Text style={style.label}>Lorem Ipsum is simply </Text>
        </View>
    )
};

export default Select;