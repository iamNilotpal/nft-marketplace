import React from 'react';
import { Text, View } from 'react-native';
import NFTCta from '../CTA';
import styles from './styles';

const SubInfo = ({ NFT, buttonData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.nftName}>{NFT.name}</Text>
      <Text style={styles.creator}>by {NFT.creator}</Text>
      <NFTCta
        buttonText={buttonData.title}
        onButtonPress={() => buttonData.onPress(NFT)}
        price={NFT.price}
      />
    </View>
  );
};

export default SubInfo;
