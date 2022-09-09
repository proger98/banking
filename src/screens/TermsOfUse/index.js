import React from 'react';
import { SafeAreaView, Text, View, StatusBar, ScrollView } from 'react-native';
import ActionSheet, { SheetManager } from 'react-native-actions-sheet';
import SignatureCapture from 'react-native-signature-capture';

import Button from '../../components/buttons/button';
import StepCard from '../../components/cards/step';
import Building from '../../assets/imgs/building';
import ArrowRight from '../../assets/imgs/arrow';
import Wallet from '../../assets/imgs/wallet';
import Person from '../../assets/imgs/person';
import colors from '../../constants/colors';
import styles from './style';

const TermsOfUseScreen = () => {
    const signatureRef = React.createRef();
    const actionSheetRef = React.createRef();
    const [disabled, setDisabled] = React.useState(true);
    const [signature, setSignature] = React.useState(null);
    const [maxHeight, setMaxHeight] = React.useState(true);
    const [withSignature, setWithSignature] = React.useState(false);

    React.useEffect(() => {
        SheetManager.show('terms');
    }, [])

    const next = () => {
        if (withSignature) {
            return null;
        }
        actionSheetRef.current?.snapToIndex(0)
        signatureRef.current?.saveImage();
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
                onChange={(position, height) => {
                    if (!position) {
                        setMaxHeight(false);
                    } else if(Math.floor(height - height * 0.7) === Math.floor(position)) {
                        setMaxHeight(true);
                    }
                }}
                initialSnapIndex={0}
                snapPoints={[70, 100]}
                containerStyle={styles.sheet}
                indicatorStyle={styles.indicator}
                backgroundInteractionEnabled={true}>
                <Text style={styles.sheetTitle}>{withSignature ? `Lorem Ipsum is simply \ndummy text of the printing` : `Terms of Use`}</Text>
                <View style={{ [maxHeight ? 'maxHeight' : 'minHeight']: 166 }}>
                    <ScrollView>
                        <Text style={styles.terms}>{withSignature ? `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.` : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  Lorem Ipsum has been the industry's `}</Text>
                    </ScrollView>
                </View>
                {!withSignature ?
                    <>
                        <Text style={styles.signature}>I have read and understand the terms of use</Text>
                        <View style={styles.signatureInputContainer}>
                            <SignatureCapture
                                showBorder={false}
                                ref={signatureRef}
                                onSaveEvent={({ encoded }) => {
                                    setSignature(encoded);
                                }}
                                onDragEvent={(e) => {
                                    if (disabled) {
                                        setDisabled(false);
                                    }
                                }}
                                viewMode={'portrait'}
                                showTitleLabel={false}
                                strokeColor={colors.text}
                                showNativeButtons={false}
                                style={styles.signatureInput}
                                saveImageFileInExtStorage={false}
                            />
                        </View>
                    </>
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
                    disabled={disabled}
                    containerStyle={styles.mt40}
                />
            </ActionSheet>
        </View >
    )
};

export default TermsOfUseScreen;