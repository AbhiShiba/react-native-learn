
import { StyleSheet,Text,View} from "react-native";
import WelcomeScreen from  "./Components/Screens/HomeScreen";


export default function App() {

  return (
    
      <WelcomeScreen />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

