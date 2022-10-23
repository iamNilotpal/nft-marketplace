import { StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOWS } from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.base,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
    position: 'relative',
    paddingBottom: 15,
  },
  imageContainer: { height: 200 },
  nftImage: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.base,
    borderTopRightRadius: SIZES.base,
  },
});
