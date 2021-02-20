import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

    const [nome,  setNome]  =useState('');
    const [email, setEmail] =useState('');    
    const [senha, setSenha] =useState('');

    const cadastro = () => {
        // alert (nome);
        // alert (email);
        // alert (senha);
        alert ('Cadastro realizado com sucesso!')
    }


  return (
    <View style={styles.container}>      
      <StatusBar hidden />

      <Image style={{width:400 , height:300, borderRadius:20}} source={require('./assets/leao.jpg')} />

      <TextInput placeholder= "Digite seu nome" style={styles.textInput} onChangeText={text=>setNome(text)} />
      <TextInput placeholder= "email" style={styles.textInput} onChangeText={text=>setEmail(text)} />
      <TextInput secureTextEntry={true} placeholder= "Crie uma senha" style={styles.textInput} onChangeText={text=>setSenha(text)} />

      <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
        <Text style={{color:'white', textAlign:'center'}}>CADASTRAR!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2BAFAF',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,   
    margin:10,
  },
  btnCadastro:{
    width:'100%',
    height:40,
    backgroundColor:'#b94ce1',
    borderRadius:20,
    justifyContent:'center'
  }
});
