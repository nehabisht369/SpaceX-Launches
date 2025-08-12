import React, { useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as Linking from "expo-linking";
import { Launchpad } from "../../api/spacex";
import styles from "./styles";

interface MapViewProps {
  launchpad: Launchpad;
}

const MapViewComponent: React.FC<MapViewProps> = ({ launchpad }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        setErrorMsg("Unable to get your current location");
      }
    })();
  }, []);

  const handleOpenMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${launchpad.latitude},${launchpad.longitude}&travelmode=driving`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: launchpad.latitude,
          longitude: launchpad.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: launchpad.latitude,
            longitude: launchpad.longitude,
          }}
          title={launchpad.name}
          description={launchpad.full_name}
        />

        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            pinColor="blue"
          />
        )}
      </MapView>

      <TouchableOpacity style={styles.button} onPress={handleOpenMaps}>
        <Text style={styles.buttonText}>Get Directions</Text>
      </TouchableOpacity>

      {errorMsg && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMsg}</Text>
        </View>
      )}
    </View>
  );
};

export default MapViewComponent;
