import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from '../../Components/Button/Button';
import {Container, ContainerText, ContainerButton, StyleTextInput, StyleText } from './styles'

const SignIn = ({ navigation }) => {
    return (

        <View style={Container}>
            <View style={ContainerText}>
                <Text style={{
                    color: '#701b9b',
                    fontSize: 55,
                    fontWeight: 'bold',
                    marginBottom: '5%',
                    marginTop: '50%'
                }}>BOOKTOUR</Text>

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


            </View>
            <View style={ContainerButton}>
                <Button
                    labelButton='ABRIR MINHA MOCHILA'
                    onpress={() => navigation.navigate('Home')}
                />
                <Button
                    labelButton="EITA, ESQUECI A SENHA!"
                    onpress={() => navigation.navigate('Home')}
                />
            </View>
        </View>

    );
}

export default SignIn;