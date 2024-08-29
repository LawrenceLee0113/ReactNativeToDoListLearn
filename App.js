import React,{useState} from 'react';
// import { } from 'react-native';

import Home from './src/screens/Home';
import WeatherPage from './src/screens/WeatherPage';

// bottom navigation
import { NavigationContainer } from '@react-navigation/native';
// 下方跳轉
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {


  return (
    // bottom navigation
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="WeatherPage" component={WeatherPage} />
        
      </Tab.Navigator>
      
      
    </NavigationContainer>
  );
}