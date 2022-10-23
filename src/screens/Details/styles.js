import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

export default StyleSheet.create({
  imageContainer: { width: '100%', height: 400, position: 'relative' },

  image: {
    width: '100%',
    height: '100%',
  },

  currentBids: {
    paddingHorizontal: 16,
    marginTop: SIZES.extraLarge + 10,
  },

  bidHeader: {
    fontWeight: '900',
    fontSize: SIZES.medium,
    color: COLORS.primary,
    marginBottom: 15,
  },
});
