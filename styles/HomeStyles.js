import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  profileButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  exerciseButton: {
    alignItems: 'center',
    backgroundColor: '#0480E0', // azul escuro
    padding: 10,
    borderRadius: 10,
    width: '40%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  exerciseImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default HomeStyles;
