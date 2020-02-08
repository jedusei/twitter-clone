import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function NotifsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>
                No Notifications
         </Text>
        </View>
    );
}

NotifsScreen.navigationOptions = {
    title: 'Notifications',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 28
    }
});