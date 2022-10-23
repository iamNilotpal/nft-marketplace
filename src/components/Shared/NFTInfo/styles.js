import { StyleSheet } from 'react-native';
import { COLORS, SHADOWS, SIZES } from '../../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -30,
    paddingHorizontal: 15,
  },

  subInfo: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: SIZES.base,
    ...SHADOWS.dark,
  },
});
