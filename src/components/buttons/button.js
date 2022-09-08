import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors';

import style from './style';

const Button = ({
    label,
    onPress,
    disabled,
    labelStyle,
    containerStyle,
    gradientContainerStyle
}) => {

    return (
        <TouchableOpacity
            disabled={disabled}
            activeOpacity={0.7}
            onPress={onPress && onPress}
            style={[style.w100, containerStyle]}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 0.5 }}
                style={[style.container, gradientContainerStyle]}
                colors={!disabled ? colors.activeGradient : colors.inactiveGradient}
            >
                <Text style={[style.label, labelStyle]}>{label}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
};

export default Button;