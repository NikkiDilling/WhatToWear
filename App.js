import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ErrorBoundary from 'react-native-error-boundary';
import HomeScreen from './src/Screens/HomeScreen'
import MyClosetScreen from './src/Screens/MyClosetScreen'
import MyOutfitsScreen from './src/Screens/MyOutfitsScreen';
import OutfitCalendarScreen from './src/Screens/OutfitCalendarScreen';
import ProfileScreen from './src/Screens/ProfileScreen'
import {Styles } from './src/Styles/Stylesheet';


const Tab = createMaterialBottomTabNavigator();
const MyClosetStack = createStackNavigator();
const MyOutfitsStack = createStackNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
        tabBarOptions={{
        tabBarLabelStyle: {
            color: Styles.tabStyles.tabLabel.color,
            fontSize: Styles.tabStyles.tabLabel.fontSize,
        },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
      <Tab.Screen name="My Closet" component={MyClosetStackNavigator}
        options={{
          tabBarLabel: 'MyCloset',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="hanger" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
      <Tab.Screen name="My Outfits" component={MyOutfitsStackNavigator}
        options={{
           tabBarLabel: 'MyOutfits',
           tabBarIcon: ({ color, size }) =>(
             <MaterialCommunityIcons name="tshirt-v-outline" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
      <Tab.Screen name="Outfit Calendar" component={OutfitCalendarScreen}
        options={{
           tabBarLabel: 'OutfitCalendar',
           tabBarIcon: ({ color, size }) =>(
             <MaterialCommunityIcons name="calendar-month-outline" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
           tabBarLabel: 'Profile',
           tabBarIcon: ({ color, size }) =>(
             <SimpleLineIcons name="user-female" color={Styles.tabStyles.tabIcon.color} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
    </Tab.Navigator>
  )
}

function MyClosetStackNavigator() {
  return (
    <MyClosetStack.Navigator>
      <MyClosetStack.Screen name="MyCloset" component={MyClosetScreen} />
    </MyClosetStack.Navigator>
  )
}

function MyOutfitsStackNavigator() {
    return (
      <MyOutfitsStack.Navigator>
        <MyOutfitsStack.Screen name="MyOutfits" component={MyOutfitsScreen} />
      </MyOutfitsStack.Navigator>
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
