import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  profession: {
    width: "100%",
    padding: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 20,
    textAlign: "center",
    color: "darkred",
  },
  followContainer: {
    flex: 1,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  followItem: {
    alignItems: "center",
  },
  followText: {
    fontSize: 20,
    color: "darkred",
  },
  buttonStyle: {
    borderRadius: 4,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#24292e",
  },
});

export default styles;
