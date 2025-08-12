import React from "react";
import { FlatList, View, ActivityIndicator, Text } from "react-native";
import { useLaunches } from "../../hooks/useLaunches";
import LaunchCard from "../../components/LaunchCard/LaunchCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./styles";

const ListScreen: React.FC = () => {
  const { launches, loading, error, refreshing, hasMore, refresh, loadMore } =
    useLaunches();
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredLaunches = launches.filter((launch) =>
    launch.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderFooter = () => {
    if (!loading || !hasMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  };

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (loading && launches.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

      <FlatList
        data={filteredLaunches}
        renderItem={({ item }) => <LaunchCard launch={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={refresh}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ListScreen;
