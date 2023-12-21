// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

// const App=()=> {

//   return (
//     <View style={styles.container}>
//       <Text style={{color: 'white', fontSize: 55, fontWeight: 'bold'}}>BOOKTOUR</Text>
//       <Text style={{width: 300, color: 'white', fontSize: 20, textAlign: 'center'}}>Explore e organize suas viagens literárias em um só lugar</Text>
//       <View style={{width: 250}}>
//         <Button
//           style={{borderRadius:15, borderWidth:5}}
//           title="INICIAR 1º VIAGEM"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//         <Button
//           style={styles.button}
//           title="Já sou viajante"
//           color="#841584"
//           accessibilityLabel="Learn more about this purple button"
//         />
//       </View>
//       <TextInput
//         style={{backgroundColor: 'black', color: 'white'}}
//         placeholder="useless placeholder"
//         keyboardType="numeric"
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     backgroundColor: "black",

//   },
//   button: {
//     backgroundColor: "#0000",
//     borderRadius: 15,

//   }

// })

// export default App;

import Home from './Screens/Home'

const App = () => {
  return <Home/>
}
export default App