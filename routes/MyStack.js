import { createNativeStackNavigator } from '@react-navigation/native-stack';

import react from 'react';
import Gen from '../Page_functions/Gen';
import Cho from '../Page_functions/Cho';
import In from '../Page_functions/In';

const Stack = createNativeStackNavigator();
const MyStack = () => {
return (
<Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
  >
<Stack.Screen name="Gender" component={Gen} />
<Stack.Screen name="I Like" component={Cho} />
<Stack.Screen name="Bio" component={In} />
</Stack.Navigator>
)
}
export default MyStack