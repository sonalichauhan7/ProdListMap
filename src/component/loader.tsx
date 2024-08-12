import React from 'react';
import {
    ActivityIndicator,
    Modal,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { COLORS } from '../theme';

function Loader({ isLoading }: { isLoading: boolean }): JSX.Element {

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                animationType="fade"
                visible={isLoading}>
                <View style={styles.modalBackground}>
                    <ActivityIndicator size="large" color={COLORS.corn_flower} />
                </View>
            </Modal>
        </View>
    );
}

export default Loader;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
});
