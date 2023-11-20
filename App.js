import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import ErrorBoundary from 'react-native-error-boundary';
import HomeScreen from './src/Screens/HomeScreen';
import MyWardrobeScreen from './src/Screens/MyWardrobeScreen';
import WardrobeItemScreen from './src/Screens/WardrobeItemScreen';
import MyOutfitsScreen from './src/Screens/MyOutfitsScreen';
import OutfitScreen from './src/Screens/OutfitScreen';
import OutfitCalendarScreen from './src/Screens/OutfitCalendarScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import { Styles } from './src/Styles/Stylesheet';

const Tab = createMaterialBottomTabNavigator();
const ProfileStack = createStackNavigator();
const MyWardrobeStack = createStackNavigator();
const MyOutfitsStack = createStackNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
        activeColor={Styles.tabStyles.tabLabel.activeColor}
        inactiveColor={Styles.tabStyles.tabLabel.inactiveColor}
    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <SimpleLineIcons name="home" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileStackNavigator}
         options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) =>(
            <SimpleLineIcons name="user-female" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
          ),
         }} />
      <Tab.Screen name="My Wardrobe" component={MyWardrobeStackNavigator}
        options={{
          tabBarLabel: 'Wardrobe',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons name="hanger" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
          ),
        }} />
      <Tab.Screen name="My Outfits" component={MyOutfitsStackNavigator}
        options={{
           tabBarLabel: 'Outfits',
           tabBarIcon: ({ color, size, focused }) =>(
             <MaterialCommunityIcons name="tshirt-v-outline" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
      <Tab.Screen name="Outfit Calendar" component={OutfitCalendarScreen}
        options={{
           tabBarLabel: 'Calendar',
           tabBarIcon: ({ color, size, focused }) =>(
             <MaterialCommunityIcons name="calendar-month-outline" color={focused ? Styles.tabStyles.tabIcon.activeColor : Styles.tabStyles.tabIcon.inactiveColor} size={Styles.tabStyles.tabIcon.size} />
           ),
        }} />
    </Tab.Navigator>
  )
}

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="My Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}
function MyWardrobeStackNavigator() {
  return (
    <MyWardrobeStack.Navigator>
      <MyWardrobeStack.Screen name="My Wardrobe" component={MyWardrobeScreen} />
      <MyWardrobeStack.Screen name="My Wardrobe Items" component={WardrobeItemScreen} />
    </MyWardrobeStack.Navigator>
  )
}
function MyOutfitsStackNavigator() {
  return (
    <MyOutfitsStack.Navigator>
      <MyOutfitsStack.Screen name="My Outfits" component={MyOutfitsScreen} />
      <MyOutfitsStack.Screen name="My Outfit Items" component={OutfitScreen} />
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
