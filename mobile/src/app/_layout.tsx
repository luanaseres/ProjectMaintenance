import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack screenOptions={{headerShown:false, animation:'ios'}} initialRouteName='index'>
      <Stack.Screen name="index"  />
      <Stack.Screen name="settings"  /> 
      <Stack.Screen name="(tabs)"  />
    </Stack>
  );
}
