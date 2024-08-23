import { View, VStack, Text } from "react-native"
export interface Props{
  data: Delivery
}
type Delivery = {
  id: string
  username: string
  created_at: string
}
export function DeliveryCard({data}: any) {
  return (
    <View style={{backgroundColor: '#ccc'}}>
      <Text>
      {data.username}
    </Text>

    <Text>
      {data.createdAt}
    </Text>
</View>
  )
}