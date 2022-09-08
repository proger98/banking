import React from 'react';
import { View } from 'react-native';

import style from './style';

const StepCard = ({
    Icon
}) => {

    return (
        <View style={style.stepCardContainer}>
            {Icon ? <Icon /> : null}
        </View>
    )
};

export default StepCard;