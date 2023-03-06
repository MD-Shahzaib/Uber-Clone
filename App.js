import { StyleSheet, View } from 'react-native';
import Navigator from './src/config/navigation';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});




// ------------------------------- Hammad code ------------------------------.
/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './config/navigation';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (

    <Provider store={store} >
      <View style={styles.container}>
        <Navigator />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
*/
// ------------------------------- Hammad code ------------------------------.
