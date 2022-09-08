import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        borderRadius: 32,
        paddingVertical: 19,
        alignItems: 'center',
    },
    w100: {
        width: '100%',
        borderRadius: 32
    },
    gradient: {
        width: '100%',
    },
    label: {
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '500',
        letterSpacing: 0.3,
        color: colors.text,
        fontStyle: 'normal',
        fontFamily: 'Raleway'
    }
});