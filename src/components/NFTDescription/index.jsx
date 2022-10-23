import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const NFTDescription = ({ description }) => {
  const [showFullText, setShowFullText] = useState(false);
  const text = showFullText
    ? description
    : description.slice(0, 150).padEnd(162, '...Read more');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Description</Text>
      <View style={styles.description}>
        <TouchableOpacity
          activeOpacity={0.95}
          onPress={() => setShowFullText(!showFullText)}>
          <Text>{text}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 16,
  },

  title: {
    fontWeight: '700',
    marginBottom: 10,
  },

  description: {
    flexDirection: 'row',
  },
});

export default NFTDescription;
