import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Crypto from 'expo-crypto';

export default function App() {
  useEffect(() => {
    (async () => {
      const digest = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.Base64
      );
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Crypto Module</Text>
    </View>
  );
}




