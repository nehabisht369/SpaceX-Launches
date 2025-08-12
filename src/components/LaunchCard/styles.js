import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  patchImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  missionName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#333",
  },
  launchDate: {
    fontSize: 14,
    color: "#666",
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});
