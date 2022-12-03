import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet,SafeAreaView,Text,View,TextInput,Button,TouchableOpacity } from 'react-native';

const VerifcationWindow = () => {

  const [OTPcode, setOTPcode] = useState("");
  

  return (
    <SafeAreaView>
    <View style={styles.container}>
     

      <StatusBar style="auto" />
      <Text style={styles.txtverfication}>Put Verification Code sent via Email </Text>
      <View style={styles.inputView}>
        <TextInput style={styles.TextInput}
        placeholder=""
        onChangeText={(OTPcode) => setOTPcode(OTPcode)}
        />
      </View>

      

      
        
      
      <View style={styles.bottomView}>
      <TouchableOpacity style={styles.btnresend}>
        <Text style = { styles.txtresend}>Resend OTP (24)</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btndone}>
        <Text style = { styles.txtdone}>Done</Text>
      </TouchableOpacity>
      </View>



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

  
  inputView:{
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "40%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    marginTop:150
    
  },

  TextInput: {
    height: 50,
    width:"80%",
    flex: 1,
    padding: 5,
    marginLeft: 10,
    
  },

  txtverfication: { 
    
    height: 30,
    marginBottom:30,
    textAlign:"Left",
    fontColor:"#FFFFFF",
    fontSize:20,
    marginTop:130
  },


  btnresend:{
    width:130,
    height:50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FF7C00",
    marginLeft: 10
  },

    btndone:{
      width:130,
      height:50,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#FF7C00",
      marginLeft: 220
    
  },
  bottomView:{
    flexDirection: 'row',
    flex: 1,
    justifyContent:'flex-end',
    marginBottom: 10,
    alignItems: 'center',
    marginTop:150
  },

  txtresend:{
    alignItems: 'center',
    fontSize:15,
  },
  txtdone:{
    
    alignItems: 'stretch',
    fontSize:15,
    
    
  }
});

export default VerifcationWindow;

