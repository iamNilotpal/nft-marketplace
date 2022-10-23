import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: 230,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -10,
    marginHorizontal: -9,
  },
  logo: {
    width: 80,
    height: 80,
  },
  person: {
    marginTop: 10,
    marginRight: 10,
    width: 40,
    height: 40,
  },

  headingContainer: {
    marginTop: 30,
  },
  user: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.white,
    marginBottom: 4,
  },

  subheading: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
