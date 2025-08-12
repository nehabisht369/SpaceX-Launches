import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
  header: {
    padding: 20,
    alignItems: "center",
  },
  patch: {
    width: 150,
    height: 150,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: "500",
  },
  section: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  launchpadName: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  launchpadLocation: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  launchpadDetails: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  mapContainer: {
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
  },
});
