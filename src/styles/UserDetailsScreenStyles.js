import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    width: "100%",
    height: 200,
    backgroundColor: "#ff0",
    opacity: 1,
  },
  imageHeader: {
    width: "100%",
    height: 200,
    padding: 0,
    marginBottom: 20,
  },
  headerTitle: {
    position: "absolute",
    top: 100,
    left: 0,
    right: 0,
    fontSize: 20,
    textAlign: "center",
    color: "#000000",
    width: "100%",
  },
  circleImageContainer: {
    flex: 1,
    position: "absolute",
    top: 150,
    width: "100%",
    height: 150,
    alignItems: "center",
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detailsContainer: {
    flex: 1,
    position: "absolute",
    top: 300,
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
