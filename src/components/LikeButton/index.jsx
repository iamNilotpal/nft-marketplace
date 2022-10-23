import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { assets, COLORS, SHADOWS } from '../../constants';

const LikeButton = ({ ...rest }) => {
  return (
    <TouchableOpacity style={{ ...styles.container, ...rest }}>
      <Image
        source={assets.heart}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />
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
});

export default LikeButton;
