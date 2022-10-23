import { StyleSheet } from 'react-native';
import { COLORS, FONTS, SHADOWS } from '../../../constants';

export default StyleSheet.create({
  container: { paddingHorizontal: 17, marginTop: 15 },
  nftName: {
    fontFamily: FONTS.bold,
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.primary,
  },

  creator: {
    color: COLORS.gray,
    fontSize: 12,
  },
});
