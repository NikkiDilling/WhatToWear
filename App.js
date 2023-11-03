import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
//import { colours } from '../Styles/StyleSheet';
import ErrorBoundary from 'react-native-error-boundary';
//import {defaultStyle} from "./src/Styles/Stylesheet";  
import HomeScreen from './src/BottomTab/Home'
import MyClosetScreen from './src/BottomTab/MyClosetScreen'
import Weather from './src/Components/Weather';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home"/*  color={colours.HotPink} */ size={24} />
          ),
        }} />
      <Tab.Screen name="My Closet" component={StackNavigator}
        options={{
          tabBarLabel: 'MyCloset',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="user-female" /* color={colours.HotPink}  */ size={24} />
          ),
        }} />
    </Tab.Navigator>

  )
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyCloset" component={MyClosetScreen} />
      
    </Stack.Navigator>
  )
}

export default function App() {
  const handleError = (error, stackTrace) => {
    console.error(error);
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ErrorBoundary onError={handleError}>
        <TabNavigator />
      </ErrorBoundary>
    </NavigationContainer>
    
  );
}
