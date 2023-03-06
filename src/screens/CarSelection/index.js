import { View, Text, Button } from "react-native";

export default function CarSelection({ navigation }) {
    return (
        <View>
            <Text>This is Car-Selection Screen</Text>
            {/* <Button title="Pickup" onPress={() => { navigation.navigate('Pickup') }} />
            <Button title="Destination" onPress={() => { navigation.navigate('Destination') }} /> */}
        </View>
    )
}







// ------------------------------- Hammad code ------------------------------.
/*
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

function CarSelection({ route, navigation }) {
    const [vehicleActive, setVehicleActive] = useState(true);
    const [vehicle, setVehicle] = useState("");
    const selectedVehicle = vehicle;
    const { userDestination, placeName, userLongitude, userLatitude } = route.params;
    console.log("User Destination", userDestination);
    console.log("Place Name", placeName);
    const destLongitude = userDestination.longitude;
    const destLatitude = userDestination.latitude;
    console.log("destLongitude===>", destLongitude)
    console.log("destLatitude===>", destLatitude)
    // const carIcon = "https://cdn-icons-png.flaticon.com/512/3202/3202926.png";
    //vehicleActive ? styles.bigCarIcon : styles.bigCarIconActive
    // style={vehicleActive ? styles.bigCarBox : styles.bigCarBoxActive}
    console.log("Vehicle", vehicle);

    return (
        <View style={styles.container} >
            <View style={styles.vehicleBox} >
                <View style={styles.carsBox} >
                    <View style={styles.bigCarBox} onTouchStart={() => setVehicle("Car AC")} >
                        <Image style={styles.bigCarIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/9175/9175833.png" }} />
                    </View>
                    <View style={styles.smallCarBox} onTouchStart={() => setVehicle("Car Mini")}  >
                        <Image style={styles.smallCarIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png" }} />
                    </View>
                </View>
                <View style={styles.carsBox2} >
                    <View style={styles.bikeBox} onTouchStart={() => setVehicle("Bike")}  >
                        <Image style={styles.bikeIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/1168/1168041.png" }} />
                    </View>
                    <View style={styles.autoBox} onTouchStart={() => setVehicle("Rickshaw")}  >
                        <Image style={styles.autoIcon} source={{ uri: "https://cdn-icons-png.flaticon.com/512/3790/3790389.png" }} />
                    </View>
                </View>
                <View style={styles.pickupBtnContainer} >
                    <TouchableOpacity style={styles.pickupBtn} onPress={() => navigation.navigate('Summary', {
                        placeName: placeName,
                        selectedVehicle: selectedVehicle,
                        userLongitude: userLongitude,
                        userLatitude: userLatitude,
                        destLatitude: destLatitude,
                        destLongitude: destLongitude,
                    })}  >
                        <Text style={{ fontSize: 19, }} >Vehicle Selected</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#252526',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vehicleBox: {
        width: '90%',
        height: '50%',
        backgroundColor: '#2E2E2E',
        borderRadius: 10,
    },
    carsBox: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    bigCarBox: {
        width: '45%',
        height: '80%',
        borderWidth: 2,
        borderColor: '#1a8cff',
        borderRadius: 8,
        // backgroundColor: 'white',
    },
    bigCarBoxActive: {
        width: '45%',
        height: '80%',
        borderWidth: 2,
        borderColor: '#1a8cff',
        borderRadius: 8,
        backgroundColor: 'grey',
    },
    bigCarIcon: {
        width: '100%',
        height: '80%',
    },
    smallCarBox: {
        width: '45%',
        height: '80%',
        borderWidth: 2,
        borderColor: '#1a8cff',
        borderRadius: 8,
    },
    smallCarIcon: {
        width: '100%',
        height: '100%',
    },
    carsBox2: {
        width: '100%',
        height: '50%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    bikeBox: {
        width: '45%',
        height: '80%',
        borderWidth: 2,
        borderColor: '#1a8cff',
        borderRadius: 8,
    },
    bikeIcon: {
        width: '80%',
        height: '85%',
        marginLeft: 10,
    },
    autoBox: {
        width: '45%',
        height: '80%',
        borderWidth: 2,
        borderColor: '#1a8cff',
        borderRadius: 8,
    },
    autoIcon: {
        width: '85%',
        height: '80%',
        marginTop: 5,
        marginLeft: 9,
    },
    pickupBtnContainer: {
        width: '100%',
        height: '20%',
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
})
export default CarSelection;
*/
// ------------------------------- Hammad code ------------------------------.
