import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(109, 26, 154)', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'white', fontSize: 55, fontWeight: 'bold'}}>BOOKTOUR</Text>
      <Text style={{width: 300, color: 'white', fontSize: 20, textAlign: 'center'}}>Explore e organize suas viagens literárias em um só lugar</Text>
      <View style={{width: 250}}>
        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Já sou viajante"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <TextInput
        style={{backgroundColor: 'black', color: 'white'}}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
    </View>
  );
}
