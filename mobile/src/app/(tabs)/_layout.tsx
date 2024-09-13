import { LogoTitle } from '@/src/components/logoTitle';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const color = 'white'
  return (
    <Tabs screenOptions={{headerLeft: () => <LogoTitle/>, headerStyle:{backgroundColor:"#1C1E53"}, headerTitle:"", tabBarStyle:{backgroundColor:'#1C1E53'}, tabBarShowLabel:false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="maintenance"
        options={{
          title: 'Maintenance',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="android" color={color} />,
        }}
      />
      <Tabs.Screen
        name="managementMachine"
        options={{
          title: 'ManagementMachine',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="android" color={color} />,
        }}
      />
      <Tabs.Screen
        name="managementSquad"
        options={{
          title: 'ManagementSquad',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="android" color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="android" color={color} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="android" color={color} />,
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: 'Request',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="android" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
