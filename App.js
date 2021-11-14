import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { Colors, textStyles } from "./src/assets/styles";
import colors from "./src/assets/styles/colors/colors";
import { Button } from "./src/components";

const App = () => {
  return (
    <View
      style={{ backgroundColor: Colors.primary, flex: 1, alignItems: "center" }}
    >
      <SafeAreaView style={{ maxWidth: "60%", height: "30%" }}>
        <Text style={[textStyles.h1, { color: Colors.white }]}>
          Bienvenido a
        </Text>
        <Text
          style={[
            textStyles.p,
            { color: Colors.white, fontSize: 24, textAlign: "center" },
          ]}
        >
          La app que te ayuda a gestionar y no olvidar tus suscripciones
        </Text>
      </SafeAreaView>
      <ImageBackground
        source={require("./src/assets/images/intro.png")}
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
        resizeMode={"cover"}
      >
        <Button text="Iniciar Sesión" />
        <Button text="Registrarse" style={{ marginTop: 20 }} />
        <Text
          style={[
            textStyles.p,
            colors.hardGray,
            { marginBottom: 60, marginTop: 40 },
          ]}
        >
          Quiero probar la app
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
