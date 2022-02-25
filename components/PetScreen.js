import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function PetScreen () {
  return (
  <View style={styles.container}>
    <Text>PetScreen</Text>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PetScreen;