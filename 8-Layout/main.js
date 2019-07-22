import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground
} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'black'}}>
                <View style={{flex: 1/3, height: 100, flexDirection: 'row', backgroundColor: 'red'}}>
                    <View style={{flex: 1/2, backgroundColor: 'yellow'}}>
                        <Image style={{flex: 1, width: '100%', height: 'auto'}} source={require('./assets/image.png')}/>
                    </View>
                    <View style={{flex: 1/2, backgroundColor: 'pink'}}>

                    </View>
                </View>
            </View>
        );
    }
}
