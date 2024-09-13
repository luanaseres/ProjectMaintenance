import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function TabSettings() {
  return (
    <View>
      <Text>Tab Settings</Text>
      <Link href={"/login"}><Text>Sair</Text></Link>
    </View>
  );
}
