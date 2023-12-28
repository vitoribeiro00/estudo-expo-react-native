import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Button from '../Components/Button';
import SignUp from './Sign-up';
import { useState } from 'react';

const Home = () => {

  const [loading1, setIsLoading1] = useState(false);
  const [loading2, setIsLoading2] = useState(false);

  function handleButtonPress1(){
        setIsLoading1(true)
        console.log('PRessionou')
        setTimeout(() => {
          setIsLoading1(false)
        }, 1000);
  }

  function handleButtonPress2(){
    setIsLoading2(true)
    console.log('PRessionou')
    setTimeout(() => {
      setIsLoading2(false)
    }, 1000);
}

    return (

    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={{color: 'white', fontSize: 55, fontWeight: 'bold'}}>BOOKTOUR</Text>
        <Text style={{width: 300, color: 'white',marginTop:"3%", fontSize: 20, textAlign: 'center'}}>Explore e organize suas viagens literárias em um só lugar</Text>
      </View>
      <View style={styles.containerButton}>
        <Button 
          isLoading={loading1}
          labelButton='INICIAR 1° VIAGEM' 
          onpress={handleButtonPress1}
        />
        <Button
          isLoading={loading2}
          labelButton="JÁ SOU VIAJANTE"
          onpress={handleButtonPress2}
        />
      </View>
    </View>
  
    );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#841584",
    flex: 1,
    flexDirection: 'column'
  },
  containerText:{
    textAlign: 'center',
    alignItems: 'center',
    alignContent:'center',
    marginTop:"80%"
  },
  containerButton:{
    textAlign: 'center',
    alignItems: 'center',
    alignContent:'center',
    marginTop:"60%"
  }
})


export default Home