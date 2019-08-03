import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 70,
    backgroundColor: '#82BCAA',
    marginTop: 15,
    borderRadius: 5,
    flexDirection: 'row',
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
