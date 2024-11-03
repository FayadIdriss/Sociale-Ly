import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import logo from '../../assets/ours.jpg';
import { style } from './app.style';


import ButtonPress from '../../component/button/button';

export default function Home({navigation}) {
  return (
   <SafeAreaProvider>
      <SafeAreaView style={style.BlockMain}>
        <Image source={logo} style={style.Block1} />
        <View style={style.Block2} >
          <ButtonPress
            title={"Connexion"}
            backgroundColor='#b5e20a'
            bgColor="black"
            onPress={() => navigation.navigate('Connexion')}
          />
          <ButtonPress 
            title={"Inscription"} 
            bgColor="black" 
            marginTop={15}
            onPress={() => navigation.navigate('Register')}
           />          
          <View >
            <Text style={style.Text1}>By signing you accepte the Terms of</Text>
            <Text style={style.Text2}>Service and Privacy Policy</Text>
        </View>
        </View>
      </SafeAreaView>
   </SafeAreaProvider>
  );
}
