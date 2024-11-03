import { View, Button, StyleSheet } from "react-native";
import { style } from "./app.style";



export default function InputPress({title, bgColor, backgroundColor, onPress}) {
    return (
     <View style={style.ButtonPress} backgroundColor={backgroundColor}>
         <Input style={style.Button}
            title={title}
            color={bgColor}
            onPress={onPress}
         />
     </View> 
    );
  }