import { View, Button, StyleSheet } from "react-native";
import { style } from "./button.style";



export default function ButtonPress({title, bgColor, backgroundColor, onPress, marginTop}) {
    return (
     <View style={style.ButtonPress} backgroundColor={backgroundColor} marginTop={marginTop}>
         <Button style={style.Button}
            title={title}
            color={bgColor}
            onPress={onPress}
            marginTop={marginTop}
         />
     </View> 
    );
  }