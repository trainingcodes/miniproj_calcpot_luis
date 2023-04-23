import {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
  },
  textButton: {
    color: "#FFF",
    fontSize: 25,
  },
  historyText: {
    color: 'red',
    fontSize: 40,
    marginRight: 15,
    alignSelf: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'orange'
  },
  resultText: {
    color: "purple",
    fontSize: 28,
    fontWeight: "bold",
    padding: 20,
    textAlign: "left",
  },
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
    minHeight: 70,
    flex: 10,
    borderColor: 'green'
  },
  results: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: "yellow",
  },  
});