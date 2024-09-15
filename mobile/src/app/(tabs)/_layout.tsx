import { LogoTitle } from '@/src/components/logoTitle';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
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
          tabBarIcon: ({color}) => <FontAwesome6 name="screwdriver-wrench" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="managementMachine"
        options={{
          title: 'ManagementMachine',
          tabBarIcon: ({color}) => <MaterialIcons name="forklift" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="managementSquad"
        options={{
          title: 'ManagementSquad',
          tabBarIcon: ({color}) => <FontAwesome size={24} name="group" color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          tabBarIcon: ({color}) => <FontAwesome5 name="clipboard-list" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarIcon: ({color}) => <MaterialCommunityIcons name="book-edit" size={28} color={color} />,
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
