import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Launch } from "../../api/spacex";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "./styles";

interface LaunchCardProps {
  launch: Launch;
}

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate("Details", { launch });
  };

  const getStatusColor = () => {
    if (launch.upcoming) return "#FFA500"; // Orange for upcoming
    if (launch.success) return "#4CAF50"; // Green for success
    return "#F44336"; // Red for failure
  };

  const getStatusText = () => {
    if (launch.upcoming) return "Upcoming";
    if (launch.success) return "Success";
    return "Failed";
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View style={styles.content}>
        {launch.links.patch.small && (
          <Image
            source={{ uri: launch.links.patch.small }}
            style={styles.patchImage}
            resizeMode="contain"
          />
        )}

        <View style={styles.textContainer}>
          <Text style={styles.missionName}>{launch.name}</Text>
          <Text style={styles.launchDate}>
            {new Date(launch.date_utc).toLocaleDateString()}
          </Text>
        </View>

        <View
          style={[styles.statusBadge, { backgroundColor: getStatusColor() }]}
        >
          <Text style={styles.statusText}>{getStatusText()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LaunchCard;
