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
      <View style={styles.formStyle}>
        <Icons name="shield-alt" size={50} color="#4144ef" />
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={handleTextInput}
        />
        <TextInput
          style={styles.input}
          value={inputText2}
          onChangeText={handleTextInput2}
        />
        <View style={styles.button}>
          <Button title="Click" onPress={handleButton} />
        </View>


        <View>
           {flag && <Text>{`${inputText} - ${inputText2}`}</Text>}
        </View>
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

  button: {
    width: "55%",
    padding: 10
  },

  formStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "90%",
    height: "90%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    width: "50%",
    height: 30,
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    color: "black",
    margin: 5,
  },
});
