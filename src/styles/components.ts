import { StyleSheet } from 'react-native';

export const components = StyleSheet.create({
  button: {
    height: 50,
    width: '65%',
    borderRadius: 30,
    backgroundColor: '#272F40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputField: {
    paddingLeft: 10,
    marginBottom: 10,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#FFE1BD66',
  },
  backButton: {
    width: 18,
    height: 22,
    resizeMode: 'contain',
  },
  postTopicBox: {
    paddingHorizontal: 10,
    marginVertical: 10,
    height: 25,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  postTopicBoxBig: {
    marginTop: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
});
