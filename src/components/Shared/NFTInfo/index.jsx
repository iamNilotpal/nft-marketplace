import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { COLORS } from '../../../constants';
import People from '../People';
import SubInfo from '../SubInfo';
import styles from './styles';

const NFTInfo = ({ NFT, buttonData }) => {
  const filteredBids = NFT.bids.filter(item => item.price > 3);
  const topBidders =
    filteredBids.length > 0 ? filteredBids : NFT.bids.slice(0, 1);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={topBidders}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <People bidder={item} marginLeft={index === 0 ? 0 : -20} />
          )}
          style={{ flexDirection: 'row' }}
        />
        <View style={styles.subInfo}>
          <Text style={{ color: COLORS.gray, fontSize: 12 }}>Ending in</Text>
          <Text
            style={{ color: COLORS.primary, fontSize: 15, fontWeight: 'bold' }}>
            12h 30m
          </Text>
        </View>
      </View>
      <SubInfo NFT={NFT} buttonData={buttonData} />
    </>
  );
};

export default NFTInfo;
