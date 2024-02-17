import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PublicRoutes from './src/routes/PublicRoutes';

export default function App() {
  return (
    <View style={styles.container}>
      <PublicRoutes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
