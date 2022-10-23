import { useNavigation } from '@react-navigation/core';
import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import FocusedStatusBar from '../../components/FocusedStatusBar';
import HomeHeader from '../../components/HomeHeader';
import NFTCard from '../../components/NFTCard';
import { COLORS, NFTData } from '../../constants';
import styles from './styles';

const H_MAX_HEIGHT = 150;
const H_MIN_HEIGHT = 52;
const H_SCROLL_DISTANCE = H_MAX_HEIGHT - H_MIN_HEIGHT;

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const headerScrollHeight = scrollOffsetY.interpolate({
    inputRange: [0, H_SCROLL_DISTANCE],
    outputRange: [H_MAX_HEIGHT, H_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const onSearch = text => setSearch(text);
  const DATA = NFTData.filter(item => {
    const match = item.name.toLowerCase().includes(search.toLowerCase());
    return match && item;
  });

  const buttonData = {
    title: 'See Details',
    onPress: NFT => navigation.navigate('Details', { NFT }),
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={styles.background}>
          <View style={{ height: 300 }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
        <HomeHeader
          onSearch={onSearch}
          value={search}
          height={headerScrollHeight}
        />
        <ScrollView
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
            { useNativeDriver: false },
          )}>
          <View
            style={{
              paddingHorizontal: 20,
              flex: 1,
              paddingTop: H_SCROLL_DISTANCE,
            }}>
            <FlatList
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <NFTCard NFT={item} buttonData={buttonData} />
              )}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
