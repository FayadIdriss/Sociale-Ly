import { View, Button, StyleSheet } from "react-native";
import { style } from "./button.style";



export default function ButtonPress({title, bgColor, backgroundColor}) {
    return (
     <View style={style.ButtonPress} backgroundColor={backgroundColor}>
        <Button style={style.Button}
        title={title}
        color={bgColor}
        />
     </View>
    );
  }