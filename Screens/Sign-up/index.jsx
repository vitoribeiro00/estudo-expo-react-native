import react from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../../Components/Button/Button';
import { Container, ContainerText, ContainerButton, StyleTextInput, StyleText } from './styles';


const SignUp = ({ navigation }) => {
    return (

        <View style={Container}>
            <View style={ContainerText}>
                <Text style={{
                    color: '#701b9b',
                    fontSize: 55,
                    fontWeight: 'bold',
                    marginBottom: '10%',
                    marginTop: '25%'
                }}>BOOKTOUR</Text>

                <Text style={StyleText}>NOME</Text>
                <TextInput
                    name='nome'
                    style={StyleTextInput}
                    keyboardType="default"
                />

                <Text style={StyleText}>E-MAIL</Text>
                <TextInput
                    name='e-mail'
                    style={StyleTextInput}
                    keyboardType="default"
                />

                <Text style={StyleText}>SENHA</Text>
                <TextInput
                    name='senha'
                    style={StyleTextInput}
                    keyboardType="default"
                />

                <Text style={StyleText}>CONFIRMAR SENHA</Text>
                <TextInput
                    name='confirmarSenha'
                    style={StyleTextInput}
                    keyboardType="default"
                />

            </View>
            <View style={ContainerButton}>
                <Button
                    labelButton='ABRIR MINHA MOCHILA'
                    onpress={() => navigation.navigate('Home')}
                />
                <Button
                    labelButton="JÁ SOU VIAJANTE"
                    onpress={() => navigation.navigate('Home')}
                />
            </View>
        </View>

    );
}

export default SignUp;