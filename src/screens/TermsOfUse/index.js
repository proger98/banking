import React from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';

import Button from '../../components/buttons/button';
import StepCard from '../../components/cards/step';
import Building from '../../assets/imgs/building';
import ArrowRight from '../../assets/imgs/arrow';
import Wallet from '../../assets/imgs/wallet';
import Person from '../../assets/imgs/person';
import styles from './style';

const TermsOfUseScreen = () => {
    
    const actionSheetRef = React.createRef();
    const [disabled, setDisabled] = React.useState(true);
    const [signature, setSignature] = React.useState(null);
    const [withSignature, setWithSignature] = React.useState(false);

    React.useEffect(() => {
        SheetManager.show('terms');
    }, [])

    const next = () => {
        if (withSignature) {
            return null;
        }
        actionSheetRef.current?.snapToIndex(0)
        setWithSignature(true);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.ph30}>
                    <Text style={styles.title}>{withSignature ? `We are now starting \nthe process!` : `Before we start\n the process`}</Text>
                    <Text style={styles.subTitle}>{`Lorem Ipsum is simply dummy text of the \nprinting and typesetting industry.`}</Text>
                </View>
            </SafeAreaView>
            <ActionSheet
                animated
                id='terms'
                gestureEnabled
                closable={false}
                ref={actionSheetRef}
                initialSnapIndex={0}
                snapPoints={[70, 100]}
                containerStyle={styles.sheet}
                indicatorStyle={styles.indicator}
                backgroundInteractionEnabled={true}>
                <Text style={styles.sheetTitle}>{withSignature ? `Lorem Ipsum is simply \ndummy text of the printing` : `Terms of Use`}</Text>
                <Text style={styles.terms}>{withSignature ? `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.` : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  Lorem Ipsum has been the industry's `}</Text>
                {!withSignature ?
                    <Text style={styles.signature}>I have read and understand the terms of use</Text>
                    :
                    <View style={styles.row}>
                        <StepCard Icon={Wallet} />
                        <ArrowRight />
                        <StepCard Icon={Person} />
                        <ArrowRight />
                        <StepCard Icon={Building} />
                    </View>
                }
                <Button
                    onPress={next}
                    label={'Next'}
                    disabled={!disabled}
                    containerStyle={styles.mt40}
                />
            </ActionSheet>
        </View >
    )
};

export default TermsOfUseScreen;