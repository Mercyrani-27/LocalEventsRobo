import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ navigation }) => {
  const markers = [
    { id: 1, title: 'Marker 1', description: 'This is marker 1', coordinate: { latitude: 37.78825, longitude: -122.4324 } },
    { id: 2, title: 'Marker 2', description: 'This is marker 2', coordinate: { latitude: 37.75825, longitude: -122.4624 } },
  ];

  const handleMarkerPress = (marker) => {
    navigation.navigate('LocationDetails', { marker });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            onPress={() => handleMarkerPress(marker)}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;