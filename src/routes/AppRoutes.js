import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home2, Heart } from 'iconsax-react-native';

import ProdutorRoutes from './ProdutorRoutes';
import MelhoresProdutoresRoutes from './MelhoresProdutoresRoutes';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#F1CC2B',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarIcon: ({ color }) => {
            let iconComponent = <Home2 color={color} />;

            if (route.name === 'Melhores Produtores') {
              iconComponent = <Heart color={color} />;
            }
            return iconComponent;
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
        })}
      >
        <Tab.Screen name="Home" component={ProdutorRoutes} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRoutes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
