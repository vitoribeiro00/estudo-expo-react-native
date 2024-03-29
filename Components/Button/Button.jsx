import React from "react";
import { 
    StyleSheet, ActivityIndicator,
    Text, 
View,
    TouchableOpacity
} from 'react-native';


const Button = ({labelButton, onpress}) => {

    return(
        <TouchableOpacity 
            style={style.button} 
            onPress={onpress}
        >
         <Text style={style.title}>{labelButton}</Text>
        </TouchableOpacity>
    )
}

export default Button

const style = StyleSheet.create({

    button:{
        backgroundColor: "#701b9b",
        width:350,
        height: 45,
        justifyContent:'center',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 5,
        borderRadius: 10,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderWidth: 3,
        borderColor: "#FFF",
    },
    title:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: "bold"
    }

})