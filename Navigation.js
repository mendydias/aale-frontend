import react from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const { Navigator, Screen } = createStackNavigator();

const AppNavigetor = () => (
  <NavigationContainer>
    <Navigator initialRouteName = 'info'>
      <Screen name = 'info'  component ={}></Screen> 
    </Navigator>
  </NavigationContainer>
)

export default AppNavigetor;