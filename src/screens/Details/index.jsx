import React from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/core';
import styles from './styles';

import Bidder from '../../components/Bidder';
import LikeButton from '../../components/LikeButton';
import BackButton from '../../components/Shared/BackButton';
import NFTInfo from '../../components/Shared/NFTInfo';
import NFTDescription from '../../components/NFTDescription';

const DetailsScreen = () => {
  const {
    params: { NFT },
  } = useRoute();
  const navigation = useNavigation();

  const buttonData = {
    title: 'Place a bid',
    onPress: NFT => navigation.navigate('Details', { NFT }),
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <LikeButton top={20} right={20} />
        <BackButton
          top={20}
          left={20}
          onBackPress={() => navigation.canGoBack() && navigation.goBack()}
        />
        <Image source={NFT.image} style={styles.image} resizeMode="cover" />
      </View>
      <NFTInfo NFT={NFT} buttonData={buttonData} />
      <NFTDescription description={NFT.description} />
      <View style={styles.currentBids}>
        <FlatList
          data={NFT.bids}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Bidder
              bidder={item}
              NFT={NFT}
              buttonData={buttonData}
              showButton={false}
            />
          )}
          ListHeaderComponent={() => (
            <Text style={styles.bidHeader}>Current bids</Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
