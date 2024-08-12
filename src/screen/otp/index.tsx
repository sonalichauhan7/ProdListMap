import React, { useState } from 'react';
import {
    Alert,
    Keyboard,
    StatusBar,
    Text,
    TextInput,
    View,
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import { COLORS } from '../../theme';
import ThemeButton from '../../component/button/theme_button';
import { STRING } from '../../utils';
import auth from '@react-native-firebase/auth';
import { CommonActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/route';
import Loader from '../../component/loader';

interface IProps {
    route: any;
}

function Otp({ route }: IProps): JSX.Element {
    const navigation = useNavigation<NavigationProp<any, any>>();
    const [isLoading, SetLoading] = useState<boolean>(false);
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");

    const handleOtp = (number: string) => {
        setError("");
        const text = number.replace(/\D/g, '');
        if (!isNaN(Number(text))) {
            setOtp(text);
        }
    }

    const onSubmitEditing = () => {
        Keyboard.dismiss();
    }

    const resetStack = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: Routes.Home }],
            })
        );
    };

    const checkValidation = () => {
        if (otp === '' || otp.length <= 0) {
            setError(STRING.otp.enter_code);
        } else if (otp.length < 6) {
            setError(STRING.otp.enter_valid_code);
        } else {
            Keyboard.dismiss();
            verifyOtp();
        }
    }

    const verifyOtp = async () => {
        SetLoading(true)
        try {
            const credential = auth.PhoneAuthProvider.credential(route.params.verificationId, otp);
            await auth().signInWithCredential(credential);
            SetLoading(false);
            resetStack();
        } catch (error) {
            SetLoading(false);
            showFailureAlert();
            console.error("Error verifying OTP ====>", error);
        }
    };

    const showFailureAlert = () => {
        Alert.alert(
            STRING.addProduct.sorry,
            STRING.otp.enter_valid_code,
            [
                { text: 'OK', onPress: () => { } },
            ],
            { cancelable: true }
        );
    }

    return (
        <SafeAreaView
            style={styles.saContainer}
            forceInset={{ top: 'always', bottom: 'never' }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={COLORS.white}
                translucent={true}
            />
            <View style={styles.container}>
                <Text style={styles.tInfo}>{STRING.otp.otp_sent_to("+91", route.params.mobileNumber)}</Text>

                <TextInput
                    placeholder={STRING.otp.enter_code}
                    placeholderTextColor={COLORS.placeholder_grey}
                    value={otp}
                    onChangeText={(text) => handleOtp(text)}
                    style={styles.tInput}
                    maxLength={6}
                    keyboardType={"numeric"}
                    onSubmitEditing={onSubmitEditing}
                />
                {error ? <Text style={styles.error}>{error}</Text> : null}

                <ThemeButton title={STRING.otp.verify} onPress={checkValidation} />
                <Loader isLoading={isLoading} />
            </View>
        </SafeAreaView>
    );
}

export default Otp;