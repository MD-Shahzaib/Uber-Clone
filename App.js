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
