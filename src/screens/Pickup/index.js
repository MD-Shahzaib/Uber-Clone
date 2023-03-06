import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Pickup({ navigation }) {

    // States.
    const [errorMsg, setErrorMsg] = useState(null);
    const [location, setLocation] = useState({
        latitude: 36.4690016,
        longitude: 70.8947707,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009,
    });

    // Get-location.
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            // Real-Time-location.
            Location.watchPositionAsync(
                { distanceInterval: 0.1, timeInterval: 100 }, (response) => {
                    console.log('location.watchPositionAsync-->', response)
                    let { coords: { latitude, longitude } } = response;
                    setLocation({ ...location, latitude, longitude });
                }
            )
        })();
    }, []);

    // for view location/errorMsg.
    let text = 'Waiting..';
    errorMsg ? text = errorMsg : text = JSON.stringify(location);

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={location}>
                <Marker
                    coordinate={location}
                    title={'Location'}
                    description={'Your Current Location'}
                />
            </MapView>
            <View style={styles.destBtnBox}>
                <Button style={styles.destBtn} title="Destination" onPress={() => { navigation.navigate('Destination') }} />
            </View>
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
    destBtnBox: {
        width: '100%',
        height: '50%',
    },
    destBtn: {
        padding: 15
    },
});




// ------------------------------- Hammad code ------------------------------.
/*
<View style={styles.pickupBtnContainer} >
    <TouchableOpacity style={styles.pickupBtn} onPress={() => {
        navigation.navigate('Destination', { currentLocation: currLocation });
    }}>
        <Text style={{ fontSize: 19, }} >Confirm Pickup</Text>
    </TouchableOpacity>
</View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252526',
    },
    map: {
        width: '100%',
        height: '90%',
    },
    pickupBtnContainer: {
        width: '100%',
        height: '10%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickupBtn: {
        width: '95%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#00e600',
    }
});
*/
// ------------------------------- Hammad code ------------------------------.
