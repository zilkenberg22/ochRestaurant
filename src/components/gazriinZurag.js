import React, { useState } from 'react'
import {Dimensions, StyleSheet} from 'react-native'
import MapView, {Callout, Marker} from 'react-native-maps';

const { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.030 //0.005 //
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default function GazriinZurag(props) 
{
    const [region, setRegion] = useState({
        latitude: 47.912783059062605,
        longitude: 106.91387778148055,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
    })
    return (<MapView 
        mapType="standard"
        style={styles.map}
        region={region}
        // onRegionChangeComplete={(r) => onRegionChange(r)}
    >
       {props.children}
    </MapView>)
}

const styles = StyleSheet.create({
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
  
      elevation: 10,
  }, 
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});