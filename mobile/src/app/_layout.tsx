import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
    <Stack initialRouteName='login'>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
