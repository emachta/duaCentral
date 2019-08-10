import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 90,
    marginTop: 15,
    borderRadius: 10,
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 3 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  star: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  starImage: {
    height: 25,
    width: 25,
    margin: 20,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 4,
  },
});
