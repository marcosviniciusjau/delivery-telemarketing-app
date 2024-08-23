
import { StyleSheet, View, Text, SectionList } from 'react-native';
import { api } from './src/lib/api';
import { useEffect, useState } from 'react';
import { DeliveryCard, Props } from './src/components/DeliveryCard';

import { Routes } from './src/routes';
import { Delivery } from './src/pages/Delivery';

export default function App() {

  return (
    <Delivery/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
