
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationDetailsScreen = ({ route }) => {
  const { marker } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{marker.title}</Text>
      <Text style={styles.description}>{marker.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'black'
  },
  description:{
    fontSize: 20,
   
    marginBottom: 10,
    color:'black'
  }
});

export default LocationDetailsScreen;
