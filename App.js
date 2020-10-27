import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summit</Text>
      <Text style={styles.subtitle}>Login with Zoom</Text>
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300, margin: 50}}
                 placeholder="  Username" autofocus={true}
      />
      <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
                 placeholder="  Password" secureTextEntry={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    fontSize: 30
  },
  title: {
    fontSize: 30
  },
  subtitle: {
    fontSize: 20,
    marginTop: 30
  }
});
