import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    Button,
    Keyboard,
    Alert
} from 'react-native';
import styles from './style';
import SafeAreaView from 'react-native-safe-area-view';
import { COLORS, SIZES } from '../../theme';
import auth from '@react-native-firebase/auth';
import ThemeButton from '../../component/button/theme_button';
import { STRING } from '../../utils';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Routes } from '../../navigation/route';
import Loader from '../../component/loader';

function Login(): JSX.Element {
    const navigation = useNavigation<NavigationProp<any, any>>();
    const [isLoading, SetLoading] = useState<boolean>(false);
    const [contact, setContact] = useState("");
    const [error, setError] = useState("");

    const handleContact = (number: string) => {
        setError("");
        const text = number.replace(/\D/g, '');
        if (!isNaN(Number(text))) {
            setContact(text);
        }
    }

    const onSubmitEditing = () => {
        Keyboard.dismiss();
    }

    const checkValidation = () => {
        if (contact === '' || contact.length <= 0) {
            setError(STRING.login.enter_mobile);
        } else if (contact.length < 10) {
            setError(STRING.login.correct_mobile);
        } else {
            Keyboard.dismiss();
            generateOtp();
        }
    }

    const generateOtp = async () => {
        SetLoading(true)
        let phoneNumber = `${"+91"} ` + contact.replace(/ /g, '');
        try {
            const confirmation: any = await auth().signInWithPhoneNumber(phoneNumber);
            if (confirmation.verificationId) {
                SetLoading(false)
                navigation.navigate(Routes.Otp, { verificationId: confirmation.verificationId, mobileNumber: contact });
            }
        } catch (err) {
            SetLoading(false);
            showFailureAlert();
            console.log("In catch block =====>", err)
        }
    }

    const showFailureAlert = () => {
        Alert.alert(
            STRING.addProduct.sorry,
            STRING.login.correct_mobile,
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
                <Text style={styles.tInfo}>{STRING.login.login_info}</Text>
                <View style={styles.vContactNumber}>
                    <Text style={[styles.tInput, { paddingHorizontal: SIZES.smartWidthScale(20) }]}>{"+91"}</Text>
                    <TextInput
                        placeholder={STRING.login.mobile_number}
                        placeholderTextColor={COLORS.placeholder_grey}
                        value={contact}
                        onChangeText={(text) => handleContact(text)}
                        style={[styles.tInput, { flex: 1 }]}
                        maxLength={10}
                        keyboardType={"numeric"}
                        onSubmitEditing={onSubmitEditing}
                    />
                </View>
                {error ? <Text style={styles.error}>{error}</Text> : null}
                <ThemeButton title={STRING.login.continue} onPress={checkValidation} />
                <Loader isLoading={isLoading} />
            </View>
        </SafeAreaView>
    );
}

export default Login;