import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import * as React from 'react';
import Button from '../../Components/Button/Button';
import { Container, ContainerText, ContainerButton } from './styles';



const Home = ({navigation}) => {

    return (
      <View style={Container}>
        <View style={ContainerText}>
          <Text style={{color: 'white', fontSize: 55, fontWeight: 'bold'}}>BOOKTOUR</Text>
          <Text style={{width: 300, color: 'white',marginTop:"3%", fontSize: 20, textAlign: 'center'}}>Explore e organize suas viagens literárias em um só lugar</Text>
        </View>
        <View style={ContainerButton}>
          <Button 
            labelButton='INICIAR 1° VIAGEM' 
            onpress={()=> navigation.navigate('Sign-up')}
          />
          <Button
            labelButton="JÁ SOU VIAJANTE"
            onpress={()=> navigation.navigate('Sign-in')}
          />
        </View>
      </View>
    );
}

export default Home