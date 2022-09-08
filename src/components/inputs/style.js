import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';


export default StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 25,
        backgroundColor: colors.input
    },
    row: {
        flexDirection: 'row',
        alignContent: 'center'
    },
    circle: {
        width: 21,
        height: 21,
        borderRadius: 21 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.orange
    },
    label: {
        fontSize: 14,
        marginLeft: 16,
        lineHeight: 20,
        color: colors.text,
        fontStyle: 'normal',
        fontFamily: 'Raleway'
    }
});