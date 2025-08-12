import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, ActivityIndicator } from "react-native";
import MapViewComponent from "../../components/MapView/MapView";
import { fetchLaunchpad } from "../../api/spacex";
import { RouteProp } from "@react-navigation/native";
import { Launch } from "../../api/spacex";
import styles from "./styles";

type RootStackParamList = {
  Details: { launch: Launch };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">;

interface DetailsScreenProps {
  route: DetailsScreenRouteProp;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({ route }) => {
  const { launch } = route.params;
  const [launchpad, setLaunchpad] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLaunchpad = async () => {
      try {
        const pad = await fetchLaunchpad(launch.launchpad);
        setLaunchpad(pad);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load launchpad"
        );
      } finally {
        setLoading(false);
      }
    };

    loadLaunchpad();
  }, [launch.launchpad]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {launch.links.patch.small && (
          <Image
            source={{ uri: launch.links.patch.small }}
            style={styles.patch}
          />
        )}
        <Text style={styles.title}>{launch.name}</Text>
        <Text style={styles.date}>
          {new Date(launch.date_utc).toLocaleDateString()}
        </Text>
        <Text style={styles.status}>
          Status:{" "}
          {launch.upcoming ? "Upcoming" : launch.success ? "Success" : "Failed"}
        </Text>
      </View>

      {launchpad && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Launchpad</Text>
          <Text style={styles.launchpadName}>{launchpad.full_name}</Text>
          <Text style={styles.launchpadLocation}>
            {launchpad.locality}, {launchpad.region}
          </Text>
          <Text style={styles.launchpadDetails}>{launchpad.details}</Text>

          <View style={styles.mapContainer}>
            <MapViewComponent launchpad={launchpad} />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DetailsScreen;
