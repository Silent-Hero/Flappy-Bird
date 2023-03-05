import React from 'react';
import { View, Image } from 'react-native';

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50
    const birdHeight = 60
    const image = {uri: "https://www.pngfind.com/pngs/m/636-6363024_bead-png-download-flappy-bird-transparent-background-png.png"}

    return (
        <View style={{
            position: 'absolute',
            width: birdWidth,
            height: birdHeight,
            left: birdLeft - (birdWidth/2),
            bottom: birdBottom - (birdHeight/2),
        }}>
          <Image source={image} style={{height:50, width: 50}}/>
        </View>
    )
}

export default Bird