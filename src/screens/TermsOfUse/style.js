import { StyleSheet } from 'react-native';

import colors from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.text
    },
    title: {
        fontSize: 26,
        marginTop: 73,
        lineHeight: 32,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'center',
        fontFamily: 'Raleway'
    },
    subTitle: {
        fontSize: 14,
        marginTop: 12,
        lineHeight: 26,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'center',
        fontFamily: 'Raleway'
    },
    ph30: {
        paddingHorizontal: 30
    },
    sheet: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 30,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.background
    },
    indicator: {
        height: 3,
        width: 80,
        borderRadius: 2,
        alignSelf: 'center',
        backgroundColor: colors.text
    },
    sheetTitle: {
        fontSize: 20,
        marginTop: 30,
        lineHeight: 28,
        marginBottom: 20,
        fontWeight: '700',
        color: colors.text,
        fontStyle: 'normal',
        fontFamily: 'Raleway'
    },
    terms: {
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 30,
        fontWeight: '300',
        color: colors.text,
        fontStyle: 'normal',
        fontFamily: 'Raleway'
    },
    signature: {
        fontSize: 12,
        lineHeight: 26,
        fontWeight: '300',
        fontStyle: 'normal',
        fontFamily: 'Raleway',
        color: colors.placeholder
    },
    mt40: {
        marginTop: 40
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    signatureInputContainer: {
        height: 90,
        borderRadius: 20,
        overflow: 'hidden'
    },
    signatureInput: {
        height: 90,
        backgroundColor: colors.input
    }
});