import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import CompletedPage from './components/CompletedPage';
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{ headerShown: false }}  // Hide the header title
          />
          <Stack.Screen name="SettingsPage" component={SettingsPage} />
          <Stack.Screen name="CompletedPage" component={CompletedPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
