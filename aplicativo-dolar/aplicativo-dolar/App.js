import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

import AssetExample from './components/AssetExample';


import { Card } from 'react-native-paper';


export default function App() {


    var  [ totalReal, setTotalReal ] = useState('');
     var  [ totalDolar, setTotalDolar ] = useState('');
      var [ cotacao, setCotacao ] = useState('');

      function CalcularTotal(){

          totalDolar = parseFloat(totalReal) / parseFloat(cotacao);

          alert(' O Total em Dólar é: ' +  totalDolar)

      }


  return (
    <View style={styles.container}>
      
        <Text style={styles.titulo}> Aplicativo Dólar </Text>

        <Text style={styles.inf}> Digite um valor em Real no primeiro campo, no segundo a cotação atual do dólar e deixe que o Goku e o Kuririn agiotas façam a conversão </Text>

       <AssetExample/>

        <TextInput placeholder=" Valor em Real " 
        keyboardType="numeric" 
        style={styles.campo}
        onChangeText={(totalReal) => setTotalReal(totalReal)}
        />

        <TextInput placeholder=" Cotação Atual do Dólar " 
        keyboardType="numeric" 
        style={styles.campo}
        onChangeText={(cotacao) => setCotacao(cotacao)}
        />

        <TouchableOpacity style={styles.botao} onPress={CalcularTotal}>

        <Text> Calcular </Text>

        </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#5F9EA0',
    
  },
  
  titulo:{

    textAlign:'center',
    marginTop: 40,
    marginBottom:20,
    fontSize: 30,
    color:"#FFF"
  },

  campo:{

    backgroundColor:"#FFF",
    borderRadius: 30,
    margin: 10,
    padding: 10,
    fontSize: 15
  },

  botao:{

    justifyContent:'center',
    alignItems:'center',
    margin:10,
    backgroundColor:"#98FB98",
    height: 40,
    borderRadius:20,
    width: 200
  },

  inf:{

    fontSize: 20,
    color:'#FFF',
    textAlign:'center',
    margin: 1,

  },

  ibagem:{

    
  }
});
