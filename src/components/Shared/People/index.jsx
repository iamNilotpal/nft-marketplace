import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS, SHADOWS } from '../../../constants';

const People = ({ bidder, marginLeft, ...rest }) => {
  return (
    <View style={{ ...styles.container, marginLeft, ...rest }}>
      <Image source={bidder.image} resizeMode="cover" style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    padding: 1,
    ...SHADOWS.medium,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
});

export default People;
