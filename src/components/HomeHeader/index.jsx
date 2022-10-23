import { View, Text, Image, Animated } from 'react-native';
import React from 'react';
import { assets } from '../../constants';
import styles from './styles';
import TextInput from '../Shared/TextInput';

const HomeHeader = ({ onSearch, value, height = 230 }) => {
  return (
    <Animated.View style={{ ...styles.container, height }}>
      <View style={styles.imageContainer}>
        <Image source={assets.logo} style={styles.logo} resizeMode="center" />
        <Image source={assets.person01} style={styles.person} />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.user}>Hello, Victoria 👋</Text>
        <Text style={styles.subheading}>Let's find a masterpiece art</Text>
      </View>
      <TextInput
        placeholder="Search NFTs"
        onChangeText={onSearch}
        value={value}
      />
    </Animated.View>
  );
};

export default HomeHeader;
