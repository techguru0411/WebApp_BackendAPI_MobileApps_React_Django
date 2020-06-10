import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default function Home(props) {

    const [name, setName] = useState('Anurag')

  return (
    <View style={styles.home}>
        <Text>
            I'm on iOS
        </Text>
    </View>
  );
}

const styles = StyleSheet.create(
    {
        home: {
            flex: 1,
            backgroundColor: Platform.OS == 'android' ? '#fff' : '#00ff00',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            fontSize: 30
        }
    }
);
