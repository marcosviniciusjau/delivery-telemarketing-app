import { StyleSheet, View, Text, SectionList } from 'react-native';
import { api } from '../../lib/api';
import { useEffect, useState } from 'react';
import { DeliveryCard, Props } from '../../components/DeliveryCard';
import { AxiosError } from 'axios';

export function Delivery() {
  const [deliveries, setDeliveries]= useState([])
   async function showDeliveries(){
    try {
    const response =  await api.get('/delivery')
    console.log(response.data)
    const responsecerto= JSON.stringify(response.data)
    console.log("response certo",responsecerto)
    setDeliveries(response.data)
    } catch (error) {

      console.error('Config details:', error.config);
    }
  }
  useEffect(()=>{
    showDeliveries()
  },[])
  return (
     <View style={styles.container}>
      <Text>Entregadores</Text>
      {deliveries.map((delivery: any) => (
        <DeliveryCard key={delivery.id} data={delivery} />
      ))}
  </View>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
