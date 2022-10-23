import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bidderDescription: {
    alignItems: 'center',
  },
  bidderName: { fontWeight: '700', fontSize: 14 },
  bidDate: { fontSize: 13 },
});
