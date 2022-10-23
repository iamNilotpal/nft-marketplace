import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import { StatusBar } from 'react-native';

const FocusedStatusBar = props => {
  const focused = useIsFocused();

  return focused ? (
    <StatusBar {...props} animated networkActivityIndicatorVisible />
  ) : null;
};

export default FocusedStatusBar;
