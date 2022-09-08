import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';

import Button from '../../components/buttons/button';
import Select from '../../components/inputs/select';
import styles from './style';

const HomeScreen = () => {
    const navigation = useNavigation();

    const next = () => {
        navigation.push('Terms');
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
            <Image
                style={styles.topImage}
                source={require('../../assets/imgs/squares.png')}
            />
            <View style={styles.body}>
                <Text style={styles.title}>{`Nice to meet you,\n a plan to reduce costs`}</Text>
                <Text style={styles.subTitle}>{`Lorem Ipsum is simply dummy text of the\n typesetting industry.`}</Text>
                <Select containerStyle={styles.mt20} />
                <Select containerStyle={styles.mt20} />
                <Select containerStyle={styles.mt20} />
                <Button label={'Next'} onPress={next} containerStyle={styles.mt60} />
            </View>
        </View>
    )
};

export default HomeScreen;