import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  errorContainer: {
    position: "absolute",
    top: 20,
    alignSelf: "center",
    backgroundColor: "rgba(255,0,0,0.7)",
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "white",
  },
});
