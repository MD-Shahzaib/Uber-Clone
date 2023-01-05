import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PickupScreen from '../src/screens/Pickup';
import DestinationScreen from '../src/screens/Destination';
import CarSelectionScreen from '../src/screens/CarSelection';

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






















// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import PickupScreen from '../src/views/Pickup'
// import DestinationScreen from '../src/views/Destination'
// import CarSelectionScreen from '../src/views/CarSelection'
// import ChatsScreen from '../src/views/Chats'
// import StatusScreen from '../src/views/Status'
// import CallsScreen from '../src/views/Calls'
// import RidesScreen from '../src/views/Rides'

// const Stack = createNativeStackNavigator()
// const Tab = createMaterialTopTabNavigator()
// const Drawer = createDrawerNavigator()

// function RidesNavigator() {
//     return (

//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={TabNavigator} />
//             <Stack.Screen name="Settings" component={PickupScreen} />
//             <Stack.Screen name="New Broadcast" component={DestinationScreen} />
//         </Stack.Navigator>
//     );
// }

// function TabNavigator() {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name="Chats" component={ChatNavigator} />
//             <Tab.Screen name="Status" component={StatusScreen} />
//             <Tab.Screen name="Calls" component={CallsScreen} />
//         </Tab.Navigator>
//     );
// }

// function ChatNavigator() {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerShown: false
//             }}>
//             <Stack.Screen name="Chat" component={ChatsScreen} />
//             <Stack.Screen name="ChatDetail" component={DestinationScreen} />
//         </Stack.Navigator>
//     )
// }

// export default function DrawerNavigator() {
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator>
//                 <Drawer.Screen name="Rides" component={RidesNavigator} />
//                 <Drawer.Screen name="RidesHistory" component={RidesScreen} />
//                 {/* <Drawer.Screen name="Article" component={Article} /> */}
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }