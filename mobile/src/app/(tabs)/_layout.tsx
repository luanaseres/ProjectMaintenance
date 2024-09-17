// Importa componentes e ícones necessários para a aplicação
import { LogoTitle } from '@/src/components/logoTitle';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link, Tabs } from 'expo-router';

// Componente principal que configura a navegação por abas da aplicação
export default function TabLayout() {
  // Define a cor padrão usada para ícones e textos
  const color = 'white';

  return (
    <Tabs
      // Configura as opções para cada aba com base na rota atual
      screenOptions={({ route }) => {
        // Obtém o título da aba com base no nome da rota
        const routeTitle = getRouteTitle(route.name);

        return {
          // Adiciona um componente personalizado para o cabeçalho
          headerLeft: () => <LogoTitle />,
          
          // Adiciona um ícone para acessar as configurações
          headerRight: () => (
            <Link href="/settings" className="mr-4">
              <FontAwesome size={28} name="cog" color={color} />
            </Link>
          ),
          
          // Define o estilo do cabeçalho e da barra de navegação por abas
          headerStyle: { backgroundColor: "#1C1E53" },
          headerTitle: routeTitle,
          headerTitleStyle: { 
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          },
          tabBarStyle: { backgroundColor: '#1C1E53' },
          tabBarShowLabel: false, // Oculta os rótulos das abas, mostrando apenas ícones
        };
      }}
    >
      {/* Define as abas da aplicação e seus respectivos ícones */}
      <Tabs.Screen
        name="maintenance"
        options={{
          title: 'Maintenance',
          tabBarIcon: ({ color }) => <FontAwesome6 name="screwdriver-wrench" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="managementMachine"
        options={{
          title: 'Management Machine',
          tabBarIcon: ({ color }) => <MaterialIcons name="forklift" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="managementSquad"
        options={{
          title: 'Management Squad',
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="group" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'Register',
          tabBarIcon: ({ color }) => <FontAwesome5 name="clipboard-list" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="book-edit" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="request"
        options={{
          title: 'Request',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="clipboard-text-multiple" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

// Função auxiliar para mapear o nome da rota para o título exibido na aba
function getRouteTitle(routeName: string): string {
  switch (routeName) {
    case 'maintenance':
      return 'Manutenção';
    case 'managementMachine':
      return 'Gerenciamento de Máquinas';
    case 'managementSquad':
      return 'Gerenciamento de Equipe';
    case 'index':
      return 'Home';
    case 'register':
      return 'Registro de Peças';
    case 'report':
      return 'Relatórios';
    case 'request':
      return 'Solicitar Manutenção';
    default:
      return ''; // Retorna uma string vazia se o nome da rota não for reconhecido
  }
}
