import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';

export default function Home(props) {

    const [name, setName] = useState('Anurag')

  return (
    <View style={styles.home}>
        <Text>
            I'm on Android OS
        </Text>
        <Button
            title="go to details"
            onPress={() => props.navigation.navigate("Detail") }
        />
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
