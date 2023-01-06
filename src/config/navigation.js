import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PickupScreen from '../screens/Pickup';
import DestinationScreen from '../screens/Destination';
import CarSelectionScreen from '../screens/CarSelection';

const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Pickup" component={PickupScreen} />
                <Stack.Screen name="Destination" component={DestinationScreen} />
                <Stack.Screen name="CarSelection" component={CarSelectionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}