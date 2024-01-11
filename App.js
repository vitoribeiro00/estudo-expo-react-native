
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import SignIn from './Screens/Sign-in/index';
import SignUp from './Screens/Sign-up/index';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouterName='Home'>
        <Stack.Screen name="Home" component={Home} options={styles.screenDefault} />
        <Stack.Screen name="Sign-up" component={SignUp} options={styles.screenDefault} />
        <Stack.Screen name="Sign-in" component={SignIn} options={styles.screenDefault} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  screenDefault:{
    title: '',
    headerTransparent: true,
    headerShown: false
  }
})

export default App