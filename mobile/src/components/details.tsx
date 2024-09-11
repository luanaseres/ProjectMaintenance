import { Button, Text, TextInput, View } from "react-native";

export default function DetailsScreen({ route }: { route:any }){
  const {name, email} = route.params
  return(
    <View>
      <Text className="text-xl mb-2">Name:</Text>
      <Text className="text-lg mb-5">{name}</Text>

      <Text className="text-xl mb-2">Email:</Text>
      <Text className="text-lg mb-5">{email}</Text>
    </View>
  )
}