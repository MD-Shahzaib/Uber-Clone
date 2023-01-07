import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Pickup({ navigation }) {
    // states.
    const [errorMsg, setErrorMsg] = useState(null);
    const [location, setLocation] = useState({
        latitude: 24.8969074,
        longitude: 67.0823949,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    });

    // for get location.
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            // real-time-location.
            Location.watchPositionAsync({
                distanceInterval: 0.1,
                timeInterval: 100
            }, (response) => {
                console.log('location.watchPositionAsync-->', response)
                let { coords: { latitude, longitude } } = response;
                setLocation({ ...location, latitude, longitude });
            })
        })();
    }, []);

    // for view location/errorMsg.
    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <MapView style={styles.map}
                region={location}>
                <Marker
                    coordinate={location}
                    title={'stadium'}
                    description={'shayan ka stadium'}
                />
            </MapView>
            <Text>{text}</Text>
            <Text>This is Pickup Screen</Text>
            <Button title="Destination" onPress={() => { navigation.navigate('Destination') }} />
            <Button title="CarSelection" onPress={() => { navigation.navigate('CarSelection') }} />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '80%',
    },
});
