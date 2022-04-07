import {View, Text} from 'react-native';
import React from 'react';
import styles from './Header.styles';

export default function Header({count}) {
  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>YAPILACAKLAR</Text>
      <Text style={styles.sayi}>{count}</Text>
    </View>
  );
}
