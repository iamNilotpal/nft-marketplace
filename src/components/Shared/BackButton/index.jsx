import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

import { assets, COLORS, SHADOWS } from '../../../constants';

const BackButton = ({ onBackPress, ...rest }) => {
  return (
    <TouchableOpacity
      onPress={onBackPress}
      activeOpacity={0.7}
      style={{ ...styles.container, ...rest }}>
      <Image source={assets.left} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 5,
    position: 'absolute',
    zIndex: 10,
    ...SHADOWS.dark,
  },

  image: {
    width: 20,
    height: 20,
    borderRadius: 15,
  },
});

export default BackButton;
