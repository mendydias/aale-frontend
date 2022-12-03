import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,SafeAreaView,Text,View,Image,TextInput,Button,TouchableOpacity } from 'react-native';

const LogRegisterWindow = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
    <View style={styles.container}>
     <Image style={styles.image} source={require('../images/aale.jpeg')}/>

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password ? </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Login}>
        <Text style = { styles.logintext}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.CreateAcc}>
        <Text style = { styles.logintext}>Create Account</Text>
      </TouchableOpacity>



    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0096FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
    width: 300,
    height: 200,
  },

  inputView:{
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "40%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    width:"80%",
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },

  forgot: { 
    
    height: 30,
    marginBottom:30,
    textAlign:"Left",
  },


  Login:{
    width: "30%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent:"center",
    marginTop: 20,
    backgroundColor: "#00D7FF",
  },

    CreateAcc:{
        width: "30%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent:"center",
        marginTop: 30,
        backgroundColor: "#FF7C00",
    
  },
});

export default LogRegisterWindow;