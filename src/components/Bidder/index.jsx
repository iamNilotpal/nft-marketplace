import { View, Text } from 'react-native';
import React from 'react';
import People from '../Shared/People';
import styles from './styles';
import NFTCta from '../Shared/CTA';

const Bidder = ({ NFT, bidder, buttonData, showButton }) => {
  return (
    <View style={styles.container}>
      <People bidder={bidder} />
      <View style={styles.bidderDescription}>
        <Text style={styles.bidderName}>Bid placed by {bidder.name}</Text>
        <Text style={styles.bidDate}>{bidder.date}</Text>
      </View>
      <NFTCta
        price={NFT.price}
        buttonText={buttonData.title}
        onButtonPress={buttonData.onPress}
        showButton={showButton}
      />
    </View>
  );
};

export default Bidder;
