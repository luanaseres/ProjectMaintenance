import { Button, Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function HomeScreen({ navigation }: {navigation: any}){
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  return (
    <View className="flex-1 p-5 justify-center">
      <Text className="text-xl mb-2">Name:</Text>
      <TextInput className="border-gray-300 p-3 mb-5 rounded" placeholder="Enter your name" value={name} onChangeText={setname}/>
      <Text className="text-xl mb-2">Email:</Text>
      <TextInput className="border-gray-300 p-3 mb-5 rounded" placeholder="Enter your email" value={email} onChangeText={setemail}/>
      <Button title="Submit" onPress={() => navigation.navigate('Details', {name, email})}/>
    </View>
  );
}