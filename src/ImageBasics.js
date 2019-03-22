import React from 'react';
import {Image} from 'react-native';

export default class ImageBasics extends React.Component {
    render(): React.ReactNode {
        return (
            // <Image source={require('./img/ic_action_name.png')}/>

            // Network requests for images
            <Image
                source={{
                    uri: 'https://facebook.github.io/react/logo-og.png',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache',
                    },
                    body: 'Your Body goes here',
                }}
                style={{width: 400, height: 400, backgroundColor:'black'}}
            />
        )
    }
}
