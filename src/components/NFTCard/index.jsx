import React from 'react';
import { Image, View } from 'react-native';

import { assets } from '../../constants';
import LikeButton from '../LikeButton';
import NFTInfo from '../Shared/NFTInfo';
import styles from './styles';

const NFTCard = ({ NFT, buttonData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LikeButton image={assets.heart} right={15} top={15} />
        <Image source={NFT.image} style={styles.nftImage} resizeMode="cover" />
      </View>
      <NFTInfo NFT={NFT} buttonData={buttonData} />
    </View>
  );
};

export default NFTCard;
