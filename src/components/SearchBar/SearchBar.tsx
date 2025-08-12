import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Search missions...",
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#999" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default SearchBar;
