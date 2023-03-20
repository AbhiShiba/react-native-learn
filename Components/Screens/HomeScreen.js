import React, { useState } from "react";
import {
  ImageBackground,
  TextInput,
  StyleSheet,
  View,
  Button,
  Text,
} from "react-native";
import Icons from "react-native-vector-icons/FontAwesome5";

const WelcomeScreen = (props) => {
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [flag, setFlag] = useState(false);

  const handleTextInput = (e) => {
    setFlag(false)
    setInputText(e);
    // console.log(e.target.value);
  };

  const handleTextInput2 = (e) => {
    setFlag(false)
    setInputText2(e);
  };

  const handleButton = () => {
    if(inputText === "" || inputText2 === ""){
        return;
    } 
    setFlag(true)
  }

  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.backgroundImage}
      source={require("../assets/nahida.png")}
    >
     <View style={styles.NavBar}>
        <TextInput style={styles.text}>Menu</TextInput>
     </View>
     <View style={styles.content}>

     </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(255, 105, 0, 0.5)",
  },
  NavBar: {
    flex: 0.2,
    width: "100%",
    backgroundColor: "rgba(255, 105, 0, 0.5)",
  },
  text: {
    color: "black",
  }
});
