import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS } from '../../../constants';

export default StyleSheet.create({
  action: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  price: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    ...SHADOWS.dark,
  },
});
