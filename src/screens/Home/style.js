import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    topImage: {
        marginTop: -6,
        marginLeft: 130
    },
    body: {
        paddingTop: 26,
        alignItems: 'center',
        paddingHorizontal: 30
    },
    title: {
        fontSize: 26,
        lineHeight: 32,
        fontWeight: '700',
        color: colors.text,
        fontStyle: 'normal',
        textAlign: 'center',
        fontFamily: 'Raleway'
    },
    subTitle: {
        fontSize: 14,
        marginTop: 12,
        lineHeight: 26,
        marginBottom: 20,
        fontWeight: '300',
        fontStyle: 'normal',
        textAlign: 'center',
        fontFamily: 'Raleway',
        color: colors.placeholder
    },
    mt20: {
        marginTop: 20
    },
    mt60: {
        marginTop: 60
    }
});