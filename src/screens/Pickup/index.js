import { View, StyleSheet, Text, Button } from "react-native";

function Pickup({ navigation }) {
    return (
        <View>

            <Text>Pickup Screen</Text>

            <Button title="Destination" style={styles.space} onPress={() => { navigation.navigate('Destination') }} />

            <Button title="CarSelection" onPress={() => { navigation.navigate('CarSelection') }} />

        </View>
    )
}

export default Pickup;

const styles = StyleSheet.create({
    space: {
        marginTop: 10,
    },
})