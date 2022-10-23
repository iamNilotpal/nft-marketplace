import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { assets, COLORS } from '../../../constants';
import styles from './styles';

const NFTCta = ({ buttonText, onButtonPress, price, showButton = true }) => {
  return (
    <View style={styles.action}>
      <View style={styles.price}>
        <Image source={assets.eth} style={{ width: 20, height: 20 }} />
        <Text style={{ color: COLORS.primary, fontWeight: 'bold' }}>
          {price}
        </Text>
      </View>
      {showButton && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onButtonPress}>
          <Text style={{ color: COLORS.white, fontWeight: '500' }}>
            {buttonText}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default NFTCta;
