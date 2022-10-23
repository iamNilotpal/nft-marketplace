import { View, Image, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { assets, COLORS, SHADOWS } from '../../../constants';

const Input = ({ ...rest }) => {
  return (
    <View style={styles.container}>
      <Image source={assets.search} style={styles.icon} resizeMode="cover" />
      <TextInput
        {...rest}
        style={styles.textInput}
        placeholderTextColor={COLORS.gray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    ...SHADOWS.dark,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 50,
  },
  textInput: {
    width: '100%',
    paddingLeft: 15,
    color: COLORS.white,
  },
});

export default Input;
