import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const cadastro = () => {
    //alert(nome);
    //alert(email);
    //alert(senha);
    //Fazer chamada no back-end para cadastro
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Image style={styles.image} source={require('./assets/brandname.jpg')}/>

      <TextInput 
        placeholder="Seu nome" 
        style={styles.TextInput} 
        onChangeText={text => setNome(text)}
      />

      <TextInput 
        placeholder="Seu e-mail" 
        style={styles.TextInput} 
        onChangeText={text => setEmail(text)}
      />

      <TextInput 
        secureTextEntry={true}
        placeholder="Sua senha" 
        style={styles.TextInput} 
        onChangeText={text => setSenha(text)}
      />

      <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
        <Text style={styles.textCadastro} >CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  image: {
    width: 300,
    height: 200,
  },
  TextInput: {
    width: '100%',
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 10,
    marginBottom: 15
  },
  btnCadastro: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#c0c0c0',
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center'
  },
  textCadastro: {
    color: '#c0c0c0',
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
