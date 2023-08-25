import { createURL, getInitialURL } from 'expo-linking';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const link = createURL('/')

  const [initialUrl, setInitialUrl] = useState<string | null>(null);
  getInitialURL().then(setInitialUrl);

  return (
    <View style={styles.container}>
      <Text>The link is {link}</Text>
      <Text>The initial URL was {initialUrl}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
