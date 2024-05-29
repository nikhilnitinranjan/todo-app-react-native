import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Nikhil Nitin Ranjan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#fff',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#fff',
  },
  footerText: {
    color: '#333',
  },
});

export default Footer;
