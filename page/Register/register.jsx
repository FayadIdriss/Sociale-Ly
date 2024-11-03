// screens/SecondScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import logo from '../../assets/ours.jpg';
import { style } from './app.style';


import InputPress from '../../component/input/input';
import ButtonPress from '../../component/button/button';

export default function Register() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.BlockMain}>
        <Image source={logo} style={style.Block1} />
        <View style={style.blockText}> 
          <Text style={style.textTitre}>Enter  your  email  and</Text>
          <Text style={style.textTitre2}>Set a password</Text>

          <TextInput
            style={style.input}
            placeholder="Email"
           />
           <TextInput
            style={style.input2}
            placeholder="Mot de passe"
           />
          <ButtonPress
            title={"Inscription"}
            bgColor="black"
            backgroundColor='#b5e20a'
            marginTop={35}
          />     
        </View>
      </SafeAreaView>
   </SafeAreaProvider>
  );
}

