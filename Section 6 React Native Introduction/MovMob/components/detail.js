import React from 'react';
import { View, Text } from 'react-native';

export default class Detail extends React.Component {

    static navigationOptions = {
        title: "Detail"
    }


    render () {
        return (
            <View>
                <Text>Let's have some fun time. We all are doing great. So, this is the way we should have some great fun.</Text>
            </View>
        )
    }
}