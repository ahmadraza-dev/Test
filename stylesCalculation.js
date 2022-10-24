import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  NumberButton: {
    flex: 1,
    borderWidth: 1,
    margin: 10,
    borderColor: 'black',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Resulttext: {
    fontSize: 50,
    fontWeight: '300',
    color: 'black',
    marginRight: 10,
    marginBottom: 60,
  },
  Resulttextview: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  Calculatedtext: {
    fontSize: 40,
    fontWeight:'100',
    color: 'black',
    marginRight: 10,
  },
  Calculatedview: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  operations: {
    flex: 3,
    borderWidth:1,
    borderColor:'black',
    borderRadius:20,
    margin:10,
  },
});