import React, { useEffect, useState } from 'react';
import { Alert, Platform, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
    check,
    openSettings,
    PERMISSIONS,
    request,
    RESULTS,
} from 'react-native-permissions';
import { promptForEnableLocationIfNeeded } from 'react-native-android-location-enabler';
import styles from './style';

function Map(): JSX.Element {
    const [region, setRegion] = useState<any>(null);

    useEffect(() => {
        checkPermission();
    }, [])

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const enableResult = await promptForEnableLocationIfNeeded();
                console.log('enableResult', enableResult);
                await getCurrentLocation();
            } catch (error: unknown) {
                if (error instanceof Error) {
                    console.error(error.message);
                }
            }
        } else {
            const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            if (result === RESULTS.GRANTED) {
                getCurrentLocation();
                console.log('Location permission granted');
            } else {
                showAlert();
                console.log('Location permission denied');
            }
        }
    };

    const checkPermission = async () => {
        try {
            const permission = Platform.OS === "ios"
                ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
                : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

            const result = await check(permission);
            console.log('checkPermission result====>', result);

            switch (result) {
                case RESULTS.UNAVAILABLE:
                    console.log('Feature not available on this device.');
                    break;

                case RESULTS.DENIED:
                    requestLocationPermission();
                    break;

                case RESULTS.LIMITED:
                    console.log('Permission granted with limitations.');
                    break;

                case RESULTS.GRANTED:
                    console.log('The permission is granted');
                    getCurrentLocation();
                    break;

                case RESULTS.BLOCKED:
                    console.log('The permission is blocked');
                    showAlert();
                    break;
            }
        } catch (error) {
            console.log("In catch block=====>", error);
        }
    };

    const getCurrentLocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
                setRegion({
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                });
            },
            async error => {
                console.log("here error===>", error)
                if (error.code === 1) {
                    showAlert();
                } else if (error.code === 2) {
                    requestLocationPermission();
                }

            },
            // { enableHighAccuracy: true, timeout: 30000, maximumAge: 1000 },
        );
    }

    const showAlert = () => {
        Alert.alert(
            'Need Permission',
            'ProdList needs permission to use location. You can grant them in app settings.',
            [{ text: 'GOTO SETTINGS', onPress: () => openSettings() }],
            { cancelable: false },
        );
    };

    return (
        <View style={styles.container}>
            {region ?
                <MapView
                    style={styles.map}
                    region={region}>
                    <Marker coordinate={region} title="You are here" />
                </MapView> :
                <Text style={styles.loadingTxt}>{"Google Map is loading..."}</Text>
            }

        </View>
    )
}

export default Map;